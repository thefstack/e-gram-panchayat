// MyProfile.js
import React, { useEffect, useState } from 'react';
import { Container, Card, Title, Input, Button } from './StyledComponents';
import useAuth from '../firebase/useAuth';
import { fetchProfile } from '../firebase/auth';

function MyProfile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
  });

  const {user}=useAuth();
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfileData({ ...profileData, [name]: value });
  // };

  const getUser=async(user)=>{
    const res=await fetchProfile(user);
    setProfileData(res);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for updating profile goes here
    console.log('Profile Updated:', profileData);
  };
  useEffect(()=>{
    if(user){
      getUser(user)
    }
  },[user]);

  return (
    <Container>
      <Card style={{display:"flex", flexDirection:"column",gap:"15px"}}>
        <Title>My Profile</Title>
          <p>Name : {profileData.name}</p>
          <p>Email : {profileData.email}</p>
          <Button>Contact Admin for profile update</Button>
      </Card>
    </Container>
  );
}

export default MyProfile;
