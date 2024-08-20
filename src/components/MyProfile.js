// MyProfile.js
import React, { useState } from 'react';
import { Container, Card, Title, Input, Button } from './StyledComponents';

function MyProfile() {
  const [profileData, setProfileData] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfileData({ ...profileData, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for updating profile goes here
    console.log('Profile Updated:', profileData);
  };

  return (
    <Container>
      <Card style={{display:"flex", flexDirection:"column",gap:"15px"}}>
        <Title>My Profile</Title>
          <p>Name : {profileData.name}</p>
          <p>Email : {profileData.email}</p>
          <p>Phone : {profileData.phone}</p>
          <Button>Contact Admin for profile update</Button>
      </Card>
    </Container>
  );
}

export default MyProfile;
