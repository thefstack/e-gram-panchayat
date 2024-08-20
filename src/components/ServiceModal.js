import React from 'react';
import styled from 'styled-components';

const ServiceModal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Service Details</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <p><strong>Service Name:</strong> {item.serviceName}</p>
        <p><strong>Service Description:</strong> {item.serviceDescription}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  height: fit-content;
  flex-wrap: wrap;
  white-space: pre-wrap; /* Ensure text respects newlines */
  word-wrap: break-word; /* Break long words */
  
  p {
    margin: 10px 0; /* Add some spacing between paragraphs */
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default ServiceModal;
