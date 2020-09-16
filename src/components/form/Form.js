import React from 'react';
import {
  Form as BTForm, FormGroup, Label, Input, Button,
  Card, CardHeader, CardBody
 } from 'reactstrap';

import './Form.css';

const Form = () => {
  return(
    <Card>
      <CardHeader>
        Enviar informações p/ o Backend
      </CardHeader>
      <CardBody>
        <BTForm>
          <FormGroup>
            <Label>Aeroportos:</Label>
            <Input type="number" placeholder="Digite o nº de aeroportos" />
          </FormGroup>
          <FormGroup>
            <Label>Nuvens:</Label>
            <Input type="number" placeholder="Digite o nº de nuvens" />
          </FormGroup>
          <Button>Enviar</Button>
        </BTForm>
      </CardBody>
    </Card>
  )
}

export default Form;
