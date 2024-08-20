import React from 'react';
import { Container, Heading, ButtonLink, InnerContainer } from './components/StyledComponents';

function App() {
  return (
    <Container>
      <Heading>Welcome to E Gram Panchayat</Heading>
      <InnerContainer>
      <ButtonLink href="/login">User Login</ButtonLink>
      <ButtonLink href="/login">Admin Login</ButtonLink>
      <ButtonLink href="/login">Staff Login</ButtonLink>
      </InnerContainer>
    </Container>
  );
}

export default App;
