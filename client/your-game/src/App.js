import React, {useState} from 'react'

import './App.css';
import Answer from './components/answer/Answer';
import Modal from './components/modal/Modal';
function App() {
  const [modal, setModal] = useState(true)
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
    {modal && 
    <Modal onClose={() => setModal(false) }> 
       < Answer onAnswer={() => setModal(false)} /> 
    </Modal>}

    </div>
  );
}

export default App;
