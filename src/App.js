import React, { useState } from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import Matrix from './components/matrix';
import Form from './components/form';

function App() {
  const [matixes, setMatrixes] = useState([]);

  const onFetch = (data) => {
    setMatrixes(data);
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Teste New Space</span>
      </nav>

      <Container>
        <Row>
          <Form
            onChange={ onFetch }
          />
        </Row>

        { matixes.length > 0 &&
          <Row>
            <h3>Resultado</h3>
          </Row> }
        <Row>
          { matixes.map((m, i) =>
            <Matrix
              key={ `m-${i}`}
              matrix={ m.matrix }
              dayNumber={ m.day }
              rowNumber={ m.rows }
              colNumber={ m.columns }
            />) }
        </Row>
      </Container>
    </>
  );
}

export default App;
