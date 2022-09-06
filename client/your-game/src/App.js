import React, {useState} from 'react'

import './App.css';
import Answer from './components/answer/Answer';
import Modal from './components/modal/Modal';
import Nav from './components/nav/Nav';
import Game from './components/game/Game'
function App() {
  const [modal, setModal] = useState(false); // Модальное окно, по умолчанию отключенно 
  const [idAnswer, setIdAnswer] = useState(0); // Получаем ID вопроса по которому кликнули
  const [score, setScore] = useState(0) // Счет игрока, добавляется цена вопроса
  const [answerDone, setAnswerDone] = useState({}); // Получаем статус вопроса - верно или не верно ответили
  return (
    <div>
      <Nav/>
    <div className='container mx-auto max-w-2xl pt-5'>
    <Game setIdAnswer ={setIdAnswer} setModal={setModal} answerDone={answerDone}/>
    {modal && 
    <Modal onClose={() => setModal(false) }> 
       < Answer idAnswer={idAnswer} setScore={setScore} setAnswerDone={setAnswerDone} onAnswer={() => setModal(false)} /> 
    </Modal>}
    </div>
    </div>
  );
}

export default App;
