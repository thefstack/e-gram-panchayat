import React, { useEffect, useState } from 'react';
import { DashboardContainer, Content, DashboardHeading, Button, ApplicationList, ApplicationItem, Modal, Dropdown } from './StyledComponents';
import { fetchAllApplications, updateApplicationStatus } from '../firebase/auth';

function UpdateApplicationStatus() {
  const [applications, setApplications] = useState([]);

  const [selectedApplication, setSelectedApplication] = useState(null);
  const [selectedApplicationDetails, setSelectedApplicationDetails] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  const openUpdateModal = (application) => {
    setSelectedApplication(application);
    setNewStatus(application.status);
  };

  const closeUpdateModal = () => {
    setSelectedApplication(null);
  };

  const openDetailsModal = (application) => {
    setSelectedApplicationDetails(application);
  };

  const closeDetailsModal = () => {
    setSelectedApplicationDetails(null);
  };

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleSubmit = async() => {
    if (selectedApplication) {
      // Update the application status (mock implementation)
      const updatedApplications = applications.map(app => 
        app.applicationId === selectedApplication.applicationId ? { ...app, status: newStatus } : app
      );
      setApplications(updatedApplications);
      const res=await updateApplicationStatus(selectedApplication.applicationId,newStatus)
      if(res==1){
        alert("Update Success");
      }else{
        alert("Update Failed");
      }
      closeUpdateModal();
    }
  };
  const handleFetchApplication=async()=>{
    const res=await fetchAllApplications();
    setApplications(res)
  }

  useEffect(()=>{
    handleFetchApplication()
  },[])

  return (
    <DashboardContainer style={{ padding: "0" }}>
      <Content>
        <DashboardHeading style={{ top: "30px", width: "100%", position: 'absolute', left: "50%", transform: "translateX(-50%)" }}>
          Update Application Status
        </DashboardHeading>
        <ApplicationList style={{ padding: "80px 0" }}>
          {applications.map(application => (
            <ApplicationItem key={application.applicationId}>
              <p>{application.applicationId} - {application.serviceName}</p>
              <p>Status: {application.status}</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap:"wrap"}}>
                <Button style={{ width: "120px" }} onClick={() => openDetailsModal(application)}>View</Button>
                <Button style={{ width: "120px" }} onClick={() => openUpdateModal(application)}>Update Status</Button>
              </div>
            </ApplicationItem>
          ))}
        </ApplicationList>

        {selectedApplication && (
          <Modal>
            <h3>Update Status for {selectedApplication.name}</h3>
            <Dropdown value={newStatus} onChange={handleStatusChange}>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </Dropdown>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={closeUpdateModal}>Cancel</Button>
          </Modal>
        )}

        {selectedApplicationDetails && (
          <Modal>
            <h3>Application Details for {selectedApplicationDetails.name}</h3>
            <p><strong>Service:</strong> {selectedApplicationDetails.service}</p>
            <p><strong>Status:</strong> {selectedApplicationDetails.status}</p>
            <p><strong>Details:</strong> {selectedApplicationDetails.details}</p>
            <Button onClick={closeDetailsModal}>Close</Button>
          </Modal>
        )}
      </Content>
    </DashboardContainer>
  );
}

export default UpdateApplicationStatus;
