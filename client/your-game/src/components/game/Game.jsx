import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Game = () => {
  const [values, setValue]= useState([])
  useEffect(() => {
    (async () => {
        try {
            const res = await fetch('http://localhost:4000/questions', {
                method: 'GET',
                credentials: 'include',
            });
            const data = await res.json();
            setValue(data)
        } catch (error) {
            console.log(error)
        }
    })();
}, []);

  return (
    <Table striped bordered hover>
      <tbody>
        {values?.map(( value ) => (
          <tr key={value.id}>
          <td>{value.name_topic}</td>
          {value.Questions.map(( el ) => <td name={el.id}>{el.price}</td>)}
        </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Game