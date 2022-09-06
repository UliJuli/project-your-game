import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
const dispatch = useDispatch();
useEffect(() => {
  (async () => {
    try {
      const res = await fetch('/questions', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      // console.log('data: ', data);
      dispatch({ type: 'ADD_LIST', payload: { data } })
    } catch (error) {
      console.log(error)
    }
  })();
}, [dispatch]);

const questionsList = useSelector((store) => store.questionsList);
  
  const [modal, setModal] = useState(false); // Модальное окно, по умолчанию отключенно 
  const [idAnswer, setIdAnswer] = useState(0); // Получаем ID вопроса по которому кликнули
  const [score, setScore] = useState(0) // Счет игрока, добавляется цена вопроса
  const [answerDone, setAnswerDone] = useState({}); // Получаем статус вопроса - верно или не верно ответили
  const [name, setName] = useState("")
  function setNameHendler (data) {
    setName(data)
  }
  return (
    <div>
        <BrowserRouter>    
            <Nav name = {name}/>
            <div className='container mx-auto max-w-2xl pt-5'>
            {modal && 
            <Modal onClose={() => setModal(false) }> 
               < Answer score={score} idAnswer={idAnswer} setScore={setScore} setAnswerDone={setAnswerDone} onAnswer={() => setModal(false)} /> 
            </Modal>}
            </div>
            <Routes>
              <Route path='/' element={<Game questionsList={questionsList} setIdAnswer ={setIdAnswer} setModal={setModal} answerDone={answerDone}/>} />
              <Route path="/registration" element={<Registration setNameHendler={setNameHendler} />} />
              <Route path="/login" element={<Login setNameHendler={setNameHendler} />} />
              <Route path="/stats" element={<Stat />} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
