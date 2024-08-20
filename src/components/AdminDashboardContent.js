import React, { useEffect, useState } from 'react';
import { Content, ContentHeading, ServiceList, ServiceItem, Button } from './StyledComponents';
import { Link } from 'react-router-dom';
import ServiceModal from './ServiceModal';
import { fetchServices, deleteService } from '../firebase/auth';

const AdminDashboardContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [serviceList,setServiceList]=useState([]);

  const handleViewClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  const handleDelete=async(id)=>{
    const res=await deleteService(id)
    if(res==1){
      window.alert("Service Deleted")
    }else{
      window.alert("Service deletion failed");
    }
  }

  useEffect(()=>{
    const a=async()=>{
      const res=await fetchServices()
      setServiceList(res)
    }
    a()
  },[handleDelete])

  return (
    <Content>
      <ContentHeading>Manage Services</ContentHeading>
      <ServiceList>
        {serviceList.map((item,index)=>(
          <ServiceItem key={index}>
          <p>{item.serviceName}</p>
          <p>{item.serviceDescription.slice(0,20)}...</p>
          <div>
            <Button style={{ width: '100px' }} onClick={() => handleViewClick(item)}>
              View
            </Button>
            <Link to={`/admin/services/update/${item.serviceId}`}><Button style={{ width: '100px' }}>Edit</Button></Link>
            <Button onClick={()=>handleDelete(item.serviceId)}style={{ width: '100px' }}>Delete</Button>
          </div>
        </ServiceItem>
        ))}
        {/* Add more service items as needed */}
      </ServiceList>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedService}
      />
    </Content>
  );
};

export default AdminDashboardContent;
