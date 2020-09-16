import React, { useState } from 'react';
import {
  Form as BTForm, FormGroup, Label, Input, Button,
  Card, CardHeader, CardBody, Spinner, FormFeedback
} from 'reactstrap';
import { isEmpty } from 'lodash';
import MatrixService from '../../services/matrix';

import './Form.css';

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formErrors, setformErrors] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const valid = validate(data);

    if (valid) return sendRequest(data);
  }

  const sendRequest = (data) => {
    setLoading(true);

    const params = {
      airports: data.get('airports'),
      clouds: data.get('clouds'),
      lines: data.get('lines'),
      columns: data.get('columns')
    }
    const matrixService = new MatrixService();
    matrixService.create(params)
      .then((response) => {
        console.log('data', response.data);

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      })
  }

  const validate = (data) => {
    const [airports, clouds, lines, columns] = [data.get('airports'), data.get('clouds'), data.get('lines'), data.get('columns')];
    let formErrors = {};

    if (isEmpty(airports) || +airports < 3) { formErrors = { ...formErrors, airports: 'Valor mínimo precisa ser maior ou igual a 3' }; }
    if (isEmpty(clouds) || +clouds < 4) { formErrors = { ...formErrors, clouds: 'Valor mínimo precisa ser maior ou igual a 4' }; }
    if (isEmpty(lines) || +lines < 10) { formErrors = { ...formErrors, lines: 'Valor mínimo precisa ser maior ou igual a 10' }; }
    if (isEmpty(columns) || +columns < 10) { formErrors = { ...formErrors, columns: 'Valor mínimo precisa ser maior ou igual a 10' }; }

    setformErrors(formErrors);

    return isEmpty(formErrors);
  }

  return(
    <Card>
      <CardHeader>
        Enviar informações p/ o Backend
      </CardHeader>
      <CardBody>
        <BTForm noValidate onSubmit={ onSubmit }>
          <FormGroup>
            <Label>Aeroportos:</Label>
            <Input type="number" name="airports" placeholder="Digite o nº de aeroportos" required invalid={ formErrors.hasOwnProperty('airports') } />
            { formErrors.hasOwnProperty('airports') && <FormFeedback>{ formErrors['airports'] }</FormFeedback> }
          </FormGroup>
          <FormGroup>
            <Label>Nuvens:</Label>
            <Input type="number" name="clouds" placeholder="Digite o nº de nuvens" required invalid={ formErrors.hasOwnProperty('clouds') } />
            { formErrors.hasOwnProperty('clouds') && <FormFeedback>{ formErrors['clouds'] }</FormFeedback> }
          </FormGroup>
          <FormGroup>
            <Label>Linhas:</Label>
            <Input type="number" name="lines" placeholder="Digite o nº de linhas" required invalid={ formErrors.hasOwnProperty('lines') } />
            { formErrors.hasOwnProperty('lines') && <FormFeedback>{ formErrors['lines'] }</FormFeedback> }
          </FormGroup>
          <FormGroup>
            <Label>Colunas:</Label>
            <Input type="number" name="columns" placeholder="Digite o nº de colunas" required invalid={ formErrors.hasOwnProperty('columns') } />
            { formErrors.hasOwnProperty('columns') && <FormFeedback>{ formErrors['columns'] }</FormFeedback> }
          </FormGroup>
          <Button disabled={ loading }>
            { loading && <Spinner size="sm" color="primary" />} Enviar
          </Button>
        </BTForm>
      </CardBody>
    </Card>
  )
}

export default Form;
