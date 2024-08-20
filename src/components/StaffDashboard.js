import React, { useEffect, useState } from 'react';
import { OutletContainer, colors, Button, MenuButton } from './StyledComponents';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../firebase/auth';

function StaffDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(()=>{
    
  },[])

  return (
    <Wrapper>
        <Link to="/staff" style={{color:"#000", textDecoration:"none"}}><h1>Staff Dashboard</h1></Link>
        {!isSidebarOpen ? <MenuButton onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </MenuButton>: <></>}
      
      <Sidebar isOpen={isSidebarOpen}>
        {isSidebarOpen ? <MenuButton style={{top:"30px"}} onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </MenuButton>: <></>}
      <Link to="/staff/update-user"><Button>Update user</Button></Link>
        <Link to="/staff/application/update/:applicationId"><Button>Update Application Status</Button></Link>
        <Link onClick={logout}><Button>Logout</Button></Link>
      </Sidebar>
      
      <OutletContainer><Outlet/></OutletContainer>
      
    </Wrapper>
  );
}

const Wrapper=styled.div`
    display:flex;
    padding:30px 0px;
    flex-direction:column;
    gap:10px;
    h1{
        text-align:center;
    }
`;

// sidebar
const Sidebar = styled.div`
  width: 200px;
  position:absolute;
  top:0;
  left:0;
  background-color: ${colors.sidebarBackground};
  padding: 60px 20px;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-110%)')};

  @media (min-width: 601px) {
    position:relative;
    padding: 20px;
    display:flex;
    width:100%;
    justify-content:center;
    gap:10px;
    flex-wrap:wrap;
    transform: translateX(0); /* Always show sidebar on larger screens */
  }

  @media (max-width: 601px) {
    height: 100vh;
    z-index: 1000;
  }
`;

export default StaffDashboard;
