import React, {useState} from 'react'

import './App.css';
import Answer from './components/answer/Answer';
import Modal from './components/modal/Modal';
import Nav from './components/nav/Nav';
import Game from './components/game/Game'
function App() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Nav/>
    <div className='container mx-auto max-w-2xl pt-5'>
    {/* {modal && 
    <Modal onClose={() => setModal(false) }> 
       < Answer onAnswer={() => setModal(false)} /> 
    </Modal>} */}
    {/* <Game /> */}
    </div>
    </div>
  );
}

export default App;
