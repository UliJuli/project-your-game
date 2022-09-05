import React from 'react';
import Table from 'react-bootstrap/Table';

const Game = ({ props }) => {
  return (
    <Table striped bordered hover>
      <tbody>
        {props.map(( prop ) => (
          <tr key={prop.id}>
          <td>{prop.name_topic}</td>
          {prop[1].map(( el ) => <td name={el.id}>{el.price}</td>)}
        </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Game