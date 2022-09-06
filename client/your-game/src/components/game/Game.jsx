import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './styles.css'

const Game = ({setIdAnswer , setModal, answerDone}) => {
  const [values, setValue]= useState([])
  useEffect(() => {
    (async () => {
        try {
            const res = await fetch('http://localhost:4000/questions', {
                method: 'GET',
                credentials: 'include',
            });
            const data = await res.json();
            console.log('data: ', data);
            setValue(data)
        } catch (error) {
            console.log(error)
        }
    })();
}, []);
console.log(answerDone.status);

const tableHendlear = (e) =>{
  setIdAnswer(e.target.dataset.name);
  setModal(true)
  // if (answerDone.status === true) {
    e.currentTarget.classList.add('close')
  // }
  
}

  return (
    <Table striped bordered hover>
      <tbody>
        {values?.map(( value ) => (
          <tr key={value.id}>
          <td>{value.name_topic}</td>
          {value.Questions.map(( el ) => <td key={el.id} name={el.id} data-name={el.id} onClick={tableHendlear}>{el.price}</td>)}
        </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Game