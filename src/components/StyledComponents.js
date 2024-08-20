import styled from 'styled-components';

// Base colors based on the Modern Village theme
export const colors = {
  background: '#f9f9f6', // Light beige
  textPrimary: '#4a4a4a', // Dark gray
  textSecondary: '#6d4c41', // Earthy brown
  buttonBackground: '#8d6e63', // Rustic brown
  buttonHover: '#6d4c41', // Darker brown
  buttonActive: '#5d4037', // Even darker brown
  cardBackground: '#ffffff', // White
  headingColor: '#3e2723', // Dark brown
  sidebarBackground: '#faf3e0', // Light beige
  contentBackground: '#ffffff', // White
  menuButtonBackground: '#8d6e63E1', // Match with button color
  menuButtonHover: '#6d4c41', // Darker button color
};

// Container for the main content
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:column;
  padding:0 50px;
  align-items: center;
  min-height: 85vh; /* Full viewport height */
  background: ${colors.background};
  color: ${colors.textPrimary};
  font-family: 'Arial', sans-serif;
  over-flow:hidden;

  @media (max-width: 601px) {
    padding: 15px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

export const OutletContainer = styled.div`

`;

// Dashboard container to hold the sidebar and content
export const DashboardContainer = styled.div`

  min-height: 100vh; /* Full viewport height */
  background: ${colors.background};
  position: relative;
  flex-direction: column;

  @media (min-width: 601px) {
    padding:0 0 0 200px
  }

`;


// Menu container
export const MenuContainer= styled.div`


`;

// Menu button for small screens
export const MenuButton = styled.button`
  position: absolute;
  top: 70px;
  left: 20px;
  background-color: ${colors.menuButtonBackground};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.menuButtonHover};
  }

  @media (min-width: 601px) {
    display: none;
  }
`;

// Main content area style
export const Content = styled.div`
  flex-grow: 1;
  background-color: ${colors.contentBackground};
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const InnerContainer=styled.div`
    
`;

// Card component for user login or other content
export const Card = styled.div`
  background-color: ${colors.cardBackground};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 90%;
  }

  @media (max-width: 576px) {
    padding: 20px;
    max-width: 95%;
  }
`;

// Title style for headings within a card
export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  color: ${colors.textSecondary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

// Input field style
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid ${colors.textSecondary};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const TextField = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  height:150px;
  border-radius: 5px;
  border: 1px solid ${colors.textSecondary};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    padding: 8px;
  }
`;

// Button style
export const Button = styled.button`
  width: 100%;
  background-color: ${colors.buttonBackground};
  color: #FFFFFF;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px 10px 0 0;

  &:hover {
    background-color: ${colors.buttonHover};
  }

  &:active {
    background-color: ${colors.buttonActive};
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    padding: 8px;
  }
`;

// Link style for navigation
export const Link = styled.a`
  color: ${colors.buttonBackground};
  text-decoration: none;
  margin-top: 15px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

// Main heading style
export const Heading = styled.h1`
  font-size: 2.5rem;
  color: ${colors.headingColor};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

// AdminDashboard Heading
export const DashboardHeading = styled.h2`
  font-size: 1.5rem;
  color: ${colors.headingColor};
  margin-bottom: 20px;
  display:flex;
  position:absolute;
  top:0;
  left:50%;
  position:aboslute;
  justify-content:center;
  padding:15px;

  @media (max-width: 601px) {
    position: relative;
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`;
export const ContentHeading = styled.h2`
  font-size: 1.5rem;
  color: ${colors.headingColor};
  margin-bottom: 20px;
  display:flex;
  width:100%;
  position:aboslute;
  justify-content:center;
  padding:15px;

  @media (max-width: 601px) {
    position: relative;
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`;

// Button-like link style
export const ButtonLink = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  color: #fff; /* White text color for the button */
  background-color: ${colors.buttonBackground};
  text-decoration: none;
  padding: 10px 20px; /* Add padding to make it look like a button */
  border-radius: 5px; /* Rounded corners */
  margin: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${colors.buttonHover};
    transform: scale(1.05); /* Slightly enlarge the button */
  }

  &:active {
    background-color: ${colors.buttonActive};
    transform: scale(1.02); /* Slightly shrink the button when pressed */
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 16px;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
`;

export const ServiceList = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  padding: 10px;
  border-bottom: 1px solid ${colors.textSecondary};
  color: ${colors.textPrimary};

  div{
    display:flex;
    flex-direction:column;
  }
  p {
    margin: 0 10px;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  button {
    background-color: ${colors.buttonBackground};
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: ${colors.buttonHover};
    }

    &:active {
      background-color: ${colors.buttonActive};
    }

    @media (max-width: 768px) {
      padding: 4px 8px;
      font-size: 12px;
    }

    @media (max-width: 480px) {
      padding: 3px 6px;
      font-size: 10px;
    }
  }
`;


export const ApplicationList = styled.div`
  margin-top: 20px;
`;

export const ApplicationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:10px;
  padding: 10px;
  flex-wrap:wrap;
  border-bottom: 1px solid ${colors.textSecondary};
  color: ${colors.textPrimary};

  p {
    margin: 0;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  button {
    background-color: ${colors.buttonBackground};
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: ${colors.buttonHover};
    }

    &:active {
      background-color: ${colors.buttonActive};
    }

    @media (max-width: 768px) {
      padding: 4px 8px;
      font-size: 12px;
    }

    @media (max-width: 480px) {
      padding: 3px 6px;
      font-size: 10px;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.cardBackground};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 400px;
  width: 90%;

  h3 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: ${colors.headingColor};
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid ${colors.textSecondary};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    padding: 8px;
  }
`;