// MyApplicationStatus.js
import React, { useEffect, useState } from 'react';
import { Container, Card, Title, ApplicationList, ApplicationItem } from './StyledComponents';
import { fetchApplications } from '../firebase/auth';
import useAuth from '../firebase/useAuth'

function MyApplicationStatus() {
  const [applications, setApplications] = useState([]);
const {user}=useAuth()
  const getApplications=async(user)=>{
    const res= await fetchApplications(user);
    setApplications(res);
  }
  useEffect(()=>{
    getApplications(user)
  },[])

  return (
    <Container>
      <Card>
        <Title>My Application Status</Title>
        <ApplicationList>
          {applications.map(application => (
            <ApplicationItem key={application.id}>
              <p><strong>{application.serviceName}</strong></p>
              <p>Status: {application.status}</p>
            </ApplicationItem>
          ))}
        </ApplicationList>
      </Card>
    </Container>
  );
}

export default MyApplicationStatus;
