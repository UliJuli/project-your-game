import React from 'react';
import { useDispatch } from 'react-redux';

import Table from 'react-bootstrap/Table';
import './styles.css'

const Game = ({ questionsList, setIdAnswer, setModal, answerDone}) => {
const dispatch = useDispatch();

const tableHendlear = async (e) =>{
  setIdAnswer(e.target.dataset.name);
  setModal(true)
    const id = e.target.dataset.name;
    dispatch({type: 'BOOL_ANSWER', payload:{ id }})
}
  return (
    <Table striped bordered hover>
      <tbody>
        {questionsList?.map(( value ) => (
          <tr key={value.id}>
          <td>{value.name_topic}</td>
          {value.Questions.map(( el ) => <td className={el.hidden ? 'close' : ''} key={el.id} name={el.id} data-name={el.id} onClick={tableHendlear}>{el.price}</td>)}
        </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Game