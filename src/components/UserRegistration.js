// UserRegistration.js
import React, { useState } from 'react';
import { registerUser } from '../firebase/auth';
import { Container, Card, Title, Input, Button, Link } from './StyledComponents';
import { useNavigate } from 'react-router-dom';

function UserRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Logic for registering the user goes here
    console.log("register called")
    if(formData.password!=formData.confirmPassword){
      window.alert("both password does not match");
      return;
    }
    try {
      if(formData.password!=formData.confirmPassword)
        throw new Error("password does not match");
      console.log("working");
      const userData={
        name:formData.name,
        role:"user"
      }
      const res=await registerUser(formData.email,formData.password,userData);
      if(res==true){
        navigate('/user')
      }
      else{
        window.alert("Email is already registered")
      }
      // 
      // Redirect to login or dashboard
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Register</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button type="submit">Register</Button>
        </form>
        <Link href="/login/user">Already have an account? Login here</Link>
      </Card>
    </Container>
  );
}

export default UserRegistration;
