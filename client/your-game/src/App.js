import React, {useEffect, useState} from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import Answer from './components/answer/Answer';
import Modal from './components/modal/Modal';
import Nav from './components/nav/Nav';
import Game from './components/game/Game'
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import Stat from './components/stat/Stat';

function App() {
  const [modal, setModal] = useState(false); // Модальное окно, по умолчанию отключенно 
  const [idAnswer, setIdAnswer] = useState(0); // Получаем ID вопроса по которому кликнули
  const [score, setScore] = useState(0) // Счет игрока, добавляется цена вопроса
  const [answerDone, setAnswerDone] = useState({}); // Получаем статус вопроса - верно или не верно ответили

  return (
    <div>
        <BrowserRouter>    
            <Nav/>
            <div className='container mx-auto max-w-2xl pt-5'>
            {modal && 
            <Modal onClose={() => setModal(false) }> 
               < Answer idAnswer={idAnswer} setScore={setScore} setAnswerDone={setAnswerDone} onAnswer={() => setModal(false)} /> 
            </Modal>}
            </div>
            <Routes>
              <Route path='/' element={<Game setIdAnswer ={setIdAnswer} setModal={setModal} answerDone={answerDone}/>} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/stats" element={<Stat />} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
