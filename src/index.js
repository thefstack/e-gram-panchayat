import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import StaffDashboard from './components/StaffDashboard';
import UserDashboard from './components/UserDashboard';
import "./App.css";
import AdminDashboardContent from './components/AdminDashboardContent';
import CreateService from './components/CreateService';
import UpdateServiceList from './components/UpdateServiceList';
import UpdateApplicationStatus from './components/UpdateApplicationStatus';
import StaffDashboardContent from './components/StaffDashboardContent';
import UserDashboardContent from './components/UserDashboardContent';
import ApplyServices from './components/ApplyService'
import MyApplicationStatus from './components/MyApplicationStatus';
import MyProfile from './components/MyProfile'
import UpdateUserProfile from './components/UpdateUserProfile';
import UserRegistration from './components/UserRegistration';
import ProtectedRoute from './components/ProtectedRoute'
import CreateStaff from './components/CreateStaff';
import Forbidden from './components/Forbidden'

// Define routes
const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:"registration/user",
    element:<UserRegistration/>
  },
  {
    path: '/admin',
    element:<ProtectedRoute allowedRoles={['admin']}>  <AdminDashboard />  </ProtectedRoute> ,
    children: [
      {
        path: '',
        element: <ProtectedRoute allowedRoles={['admin']}><AdminDashboardContent /> </ProtectedRoute>,
      },
      {
        path: 'create-service',
        element: <ProtectedRoute allowedRoles={['admin']}><CreateService /></ProtectedRoute>,
      },
      {
        path: 'services/update/:serviceId',
        element:<ProtectedRoute allowedRoles={['admin']}> <UpdateServiceList /></ProtectedRoute>,
      },
      {
        path: 'application/update/:applicationId',
        element: <ProtectedRoute allowedRoles={['admin']}><UpdateApplicationStatus /></ProtectedRoute>,
      },
      {
        path:'create-staff',
        element:<ProtectedRoute allowedRoles={['admin']}><CreateStaff/></ProtectedRoute>
      }
    ],
  },
  {
    path: '/staff',
    element: <ProtectedRoute allowedRoles={['staff']}><StaffDashboard /></ProtectedRoute>,
    children: [
      {
        path: '',
        element: <ProtectedRoute allowedRoles={['staff']}><StaffDashboardContent /></ProtectedRoute>,
      },
      {
        path: 'application/update/:applicationId',
        element: <ProtectedRoute allowedRoles={['staff']}><UpdateApplicationStatus /></ProtectedRoute>,
      },
      {
        path:'update-user',
        element:<ProtectedRoute allowedRoles={['staff']}><UpdateUserProfile/></ProtectedRoute>
      }
    ],
  },
  {
    path: '/user',
    element:<ProtectedRoute allowedRoles={['user']}>  <UserDashboard /> </ProtectedRoute>,
    children: [
      {
        path: '',
        element:<ProtectedRoute allowedRoles={['user']}> <UserDashboardContent /> </ProtectedRoute>,
      },
      {
        path:'apply/:id',
        element:<ProtectedRoute allowedRoles={['user']}><ApplyServices/></ProtectedRoute>
      },
      {
        path:'applications',
        element:<ProtectedRoute allowedRoles={['user']}><MyApplicationStatus/></ProtectedRoute>
      },
      {
        path:":userId",
        element:<ProtectedRoute allowedRoles={['user']} ><MyProfile/></ProtectedRoute>
      },
    ],
  },
  {
    path: "/403",
    element: <Forbidden />,
},
];

// Create router with routes
const router = createBrowserRouter(routes);

// Create a root element for React to render into
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
