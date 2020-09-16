import React from 'react';
import {
  Card, CardHeader, CardBody
 } from 'reactstrap';

import './Matrix.css';

const Matrix = ({ airportsPosition = [], cloudPosition = [], dayNumber = 1 }) => {
  const [rowNumber, colNumber] = [10, 10];
  const rows = Array.from(Array(rowNumber));
  const cols = Array.from(Array(colNumber));

  return(
    <Card>
      <CardHeader>Dia {dayNumber}</CardHeader>
      <CardBody>
        <div className="matrix">
          { rows.map((rowValue, rowIndex) =>
            <div className="matrix-row">
              { cols.map((colValue, colIndex) =>
                <div className="matrix-col">
                  *
                </div>
              ) }
            </div>
            ) }
        </div>
      </CardBody>
    </Card>
  )
}

export default Matrix;
