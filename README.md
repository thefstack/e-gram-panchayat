# My React Firebase Application

[Project Live Link](https://root-array-429313-q8.web.app)


This project is a web application built using React and Firebase. The app includes an authentication system, role-based routing, and a form submission feature. The application is deployed on Firebase Hosting.

## Features

- **User Authentication:** Login and registration using Firebase Authentication.
- **Role-Based Routing:** Admin, staff, and user dashboards are protected with role-based access.
- **Form Submission:** Users can apply for services.
- **Admin:** Admin can create staff login id, create new servie and manage it, view application and update the application status.
- **Staff:** Staff can view application and update the application status.
- **User:** User can view Services and apply for the service they wish to.
- **Firebase Integration:** The app uses Firebase Firestore for storing data and Firebase Hosting for deployment.

## Project Structure

```plaintext
root-directory/
│
├── public/               # Static files like index.html
├── src/                  # Source files
│   ├── components/       # React components
│   ├── firebase/         # Firebase config and hooks
│   ├── App.js            # Main app component
│   ├── index.js          # ReactDOM render and router setup
│   └── ...
│
├── .firebaserc           # Firebase project configuration
├── firebase.json         # Firebase hosting configuration
├── package.json          # Node.js dependencies and scripts
└── README.md             # This README file


## Git Clone
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

## Install Dependencies
npm install


## Setup .env
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"


## Run Application
npm start

## Buil for Production
npm run build

## Deployement
npm install -g firebase-tools
firebase login
firebase init
firebase deploy


## Known Issues
404 Page Not Found Error: If you encounter a 404 error for non-root routes, ensure that your firebase.json file includes the appropriate rewrites rule.
json
Copy code
{
  "hosting": {
    "public": "build",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

## License
This project is licensed under the MIT License.
You can place this `README.md` file in the root of your project directory. It covers the key aspects of your project, including installation, deployment, and other important information. Customize it further to fit the specific details of your project.
