// SearchServices.js
import React, { useState } from 'react';
import { Container, Input, ServiceList, ServiceItem, Button } from './StyledComponents';

function SearchServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [services, setServices] = useState([
    { id: 1, name: 'Service A', description: 'Description of Service A' },
    { id: 2, name: 'Service B', description: 'Description of Service B' },
    // Add more mock services as needed
  ]);

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search for services"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ServiceList>
        {filteredServices.map(service => (
          <ServiceItem key={service.id}>
            <p><strong>{service.name}</strong></p>
            <p>{service.description}</p>
            <Button>Apply</Button>
          </ServiceItem>
        ))}
      </ServiceList>
    </Container>
  );
}

export default SearchServices;
