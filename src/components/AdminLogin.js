import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../firebase/auth';
import { Container, Card, Title, Input, Button, Link } from './StyledComponents';

const Login = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    // Handle login logic here
    try{
        const res= await loginAdmin(email,password);
        console.log("hello")
        if(res===1) {
          navigate('/admin')
        }else if(res===2){
          navigate('/staff')
        }else if(res===3){
          navigate('/user')
        }else{
          window.alert("Login Failed")
        }
    }catch(e){
      console.log(e)
    }
  };


  return (
    <Container>
      <Card>
        <Title>{userType} Login</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </form>
        <Link href='/registration/user'>Register User Here !!</Link>
      </Card>
    </Container>
  );
};

export default Login;
