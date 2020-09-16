import React from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import Matrix from './components/matrix';

function App() {
  return (
    <Container>
      <Row>
        <Matrix />
      </Row>
    </Container>
  );
}

export default App;
