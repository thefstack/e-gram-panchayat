import React, {useState} from 'react'
import { Input, Button, Container, Card, Title, TextField } from './StyledComponents';
import { registerStaff } from '../firebase/auth';




const CreateStaff = () => {

    const [staffName, setStaffName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message,setMessage]=useState('');
  
    const handleSubmit = async(e) => {
      e.preventDefault();
  
      // Mocking service creation by updating local state
      try {
        const staffData={
            name:staffName,
            email
        }
        await registerStaff(email,password,staffData);
        console.log('Staff created successfully');
      } catch (error) {
        window.alert("Error creating staff")
        console.error('Error creating staff:', error);
      }
      setMessage('Staff created successfully!');
  
    };

  return (
    <Container>
      <Card>
        <Title>Create New Staff</Title>
        <form onSubmit={handleSubmit}>
        <Input
            type="text"
            placeholder="Staff Name"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
            required
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <Button type="submit">Create Staff</Button>
        </form>
        {message && <p>{message}</p>}
      </Card>
    </Container>
  )
}

export default CreateStaff
