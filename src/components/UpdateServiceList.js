import React, { useState, useEffect } from 'react';
import { Container, Title, Input, Button, TextField } from './StyledComponents';
import { useParams } from 'react-router-dom'; // For getting the service ID from the URL
import { fetchSingleServices, updateService } from '../firebase/auth';

function UpdateServiceList() {
  const { serviceId } = useParams(); // Get the service ID from the route parameters
  const [service, setService] = useState({});

  useEffect(() => {
    // Fetch the service details using the serviceId
    // Here we use mock data for demonstration
    const a=async()=>{
      const res=await fetchSingleServices(serviceId)
      console.log(res)
      setService(res);
    }
    a()
    const mockService = { id: serviceId, name: 'Mock Service',category:"Service Category", description: 'Mock Description',link:"service.com" };
    setService(mockService);
  }, [serviceId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const res=await updateService(service.serviceId,service);
    if(res===1){
      window.alert("Service Updated")
    }else{
      window.alert("Service Update Failed")
    }
  };

  return (
    <Container>
      <Title>Update Service</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="serviceName"
          value={service.serviceName}
          onChange={handleInputChange}
          placeholder="Service Name"
        />
        <Input
          type="text"
          name="category"
          value={service.category}
          onChange={handleInputChange}
          placeholder="Service Category"
        />
        <TextField
          type="text"
          name="serviceDescription"
          value={service.serviceDescription}
          onChange={handleInputChange}
          placeholder="Service Description"
        />
        <Input
          type="text"
          name="link"
          value={service.link}
          onChange={handleInputChange}
          placeholder="Service link"
        />
        <Button type="submit">Update Service</Button>
      </form>
    </Container>
  );
}

export default UpdateServiceList;
