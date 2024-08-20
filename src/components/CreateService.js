import React, { useState } from 'react';
import { Input, Button, Container, Card, Title, TextField } from './StyledComponents';
import { addService } from '../firebase/auth';

function CreateService() {
  const [serviceId, setServiceId] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');

  const [services, setServices] = useState([]); // Mocking the list of services

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Mocking service creation by updating local state
    try {
      const serviceData={
        serviceId,
        serviceName,
        serviceDescription,
        category,
        link
      }
      await addService(serviceData);
      console.log('Service created successfully');
    } catch (error) {
      window.alert("Error creating service")
      console.error('Error creating service:', error);
    }
    setMessage('Service created successfully!');

    // Clear the form
    // setServiceName('');
    // setServiceDescription('');
    // setCategory('');
    // setLink('')
  };

  return (
    <Container>
      <Card>
        <Title>Create New Service</Title>
        <form onSubmit={handleSubmit}>
        <Input
            type="text"
            placeholder="Service ID"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <TextField
            type="text"
            placeholder="Service Description"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          
          <Button type="submit">Create Service</Button>
        </form>
        {message && <p>{message}</p>}
      </Card>
    </Container>
  );
}

export default CreateService;
