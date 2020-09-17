import React from 'react';
import {
  Card, CardHeader, CardBody
 } from 'reactstrap';

import './Matrix.css';

const Matrix = ({
  matrix = [],
  dayNumber = 1,
  rowNumber = 10,
  colNumber = 10
}) => {
  const rows = Array.from(Array(+rowNumber));
  const cols = Array.from(Array(+colNumber));

  return(
    <Card>
      <CardHeader>Dia {dayNumber}</CardHeader>
      <CardBody>
        <div className="matrix">
          { rows.map((rowValue, rowIndex) =>
            <div className="matrix-row" key={ `r-${rowIndex}` }>
              { cols.map((colValue, colIndex) =>
                <div className="matrix-col" key={ `c-${rowIndex}-${colIndex}` }>
                  { matrix[rowIndex][colIndex] === null && <span>*</span> }
                  { matrix[rowIndex][colIndex] === 'A' && <span>A</span> }
                  { matrix[rowIndex][colIndex] === 'C' && <span>C</span> }
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
