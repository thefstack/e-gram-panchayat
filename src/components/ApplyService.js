// ApplyService.js
import React, { useState, useEffect } from 'react';
import { Container, Card, Title, Input, Button } from './StyledComponents';
import { useNavigate, useParams } from 'react-router-dom';
import { addApplication, fetchSingleServices} from '../firebase/auth';
import useAuth from '../firebase/useAuth';

function ApplyService() {
  const [formData, setFormData] = useState({
    serviceId:'',
    category:'',
    serviceDescription:'',
    link:'',
    serviceName: '',
    userDetails: '',
    additionalInfo: '',
    applicantName:'',
    applicantFatherName:'',
    applicantMotherName:'',
    applicantPhoneNo:'',
    applicantVillage:'',
    applicantPincode:'',
    applicantLandmark:''
  });
  const {user}=useAuth();

  const validateForm = () => {
    // Phone number validation
    const phonePattern = /^[1-9]{1}[0-9]{9}$/;
    if (!phonePattern.test(formData.applicantPhoneNo)) {
      alert("Invalid Phone Number. It should be a 10-digit number without leading zeros.");
      return false;
    }

    // Pincode validation
    const pincodePattern = /^[1-9]{1}[0-9]{5}$/;
    if (!pincodePattern.test(formData.applicantPincode)) {
      alert("Invalid Pincode. It should be a 6-digit number.");
      return false;
    }

    return true;
  };

  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }
    console.log(user)
    formData.status="Pending";
    formData.date=new Date();
    formData.user=user.email;
    formData.applicationId=`${formData.serviceId}${formData.applicantPhoneNo.slice(6,9)}`;
    console.log(formData)
    const res=await addApplication(formData);
    if(res==1){
      window.alert("Application Submitted. Your phoneno+servicename is Your Application no");
      navigate('/user');
    }else{
      window.alert("Failed to Submit Application")
    }
  };
  const {id}=useParams()
  const fetchData=async()=>{
    const data=await fetchSingleServices(id)
    setFormData(data);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <Container>
      <Card>
        <Title>Service Details</Title>
        <form onSubmit={handleSubmit}>
          <p>Service Name : {formData.serviceName}</p>
          <p style={{margin:"10px 0"}}>Service Category : {formData.category}</p>
          <p>Service Description : {formData.serviceDescription}</p>
          <h2 style={{margin:"20px 0"}}>Fill details to apply </h2>
          <Input
            type="text"
            name="applicantName"
            placeholder="Full Name"
            value={formData.applicantName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="applicantFatherName"
            placeholder="Father Name"
            value={formData.applicantFatherName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="applicantMotherName"
            placeholder="Mother Name"
            value={formData.applicantMotherName}
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            name="applicantPhoneNo"
            placeholder="Phone No"
            value={formData.applicantPhoneNo}
            onChange={handleChange}
            pattern="[1-9]{1}[0-9]{9}"
            required
          />
          <Input
            type="text"
            name="applicantVillage"
            placeholder="Village"
            value={formData.applicantVillage}
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            name="applicantPincode"
            placeholder="pincode"
            value={formData.applicantPincode}
            onChange={handleChange}
            pattern='[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}'
            required
          />
          <Input
            type="text"
            name="applicantLandmark"
            placeholder="Landmark"
            value={formData.applicantLandmark}
            onChange={handleChange}
            required
          />
          
          <Button type="submit">Apply</Button>
        </form>
      </Card>
    </Container>
  );
}

export default ApplyService;
