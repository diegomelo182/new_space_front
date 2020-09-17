import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
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
            <Col md="12">
              <h3>Resultado</h3>
            </Col>
          </Row> }
        <Row>
          { matixes.map((m, i) =>
            <Col md="3" key={ `m-${i}`}>
              <Matrix
                matrix={ m.matrix }
                dayNumber={ i + 1 }
                rowNumber={ m.rows }
                colNumber={ m.columns }
              />
            </Col>) }
        </Row>
      </Container>
    </>
  );
}

export default App;
