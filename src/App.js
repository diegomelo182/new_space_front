import React from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import Matrix from './components/matrix';
import Form from './components/form';

function App() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Teste New Space</span>
      </nav>

      <Container>
        <Row>
          <Form />
        </Row>

        <Row>
          <h3>Resultado</h3>
        </Row>
        <Row>
          <Matrix />
        </Row>
      </Container>
    </>
  );
}

export default App;
