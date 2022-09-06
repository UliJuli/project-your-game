import React, {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Tolatter from '../latter/Tolatter'
import 'animate.css';

const onAnswer = ({}) => {return}

const Answer = ({score, onAnswer, idAnswer, setScore, setAnswerDone}) => {
  const [value, setValue]= useState('')
  const [error, setError] = useState('')
  const [answer, setAnswer] = useState('')
  const [correct, setCorrect] = useState(3)
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  useEffect(() => {
    const takeAnswer = async () => {
      const response = await axios.get(`/answer/${idAnswer}`)
      console.log(response.data);
      setAnswer(response.data)
    }
    takeAnswer()
  }, [])

  const updateStats = () => {
    axios.put(`/answer/${idAnswer}?value=${answer.price}`, Answer, {withCredentials: true}).then((res) => {
      console.log(res.data)
    })
  }
  
  const submitHandlear = async (e) => {
   setError('')
   e.preventDefault();
    if(value.trim().length === 0) {
      setError('Введи ответ, не выпендривайся')
    } else if (value.toLowerCase() === answer.answer.toLowerCase()) {
      setScore ((prev) => {
        return prev + answer.price;
      });
      updateStats()
      setCorrect(1)
      setAnswerDone({status: true, id: answer.id})
      setTimeout(() => {
        onAnswer()
      }, 2000);
    } else {
      setCorrect(2)
      setScore ((prev) => {
        return prev - answer.price;
      });
    } 
  }

  return (
    <>
    {counter ? (
        <form onSubmit={submitHandlear}  className="flex justify-center flex-col">
          <div className="text-right mb-5"><p>Ваш счет: {score}</p></div>
          <h1 className="text-center mb-5">{answer.question}</h1>
          <input type="text" 
          onChange={event => setValue(event.target.value)}
          className='border py-2 px-4 mb-2 w-full outline-0' 
          placeholder='Введите ваш ответ'
          value={value}
          />
          
          <button type='submit'className='ease-linear transform hover:scale-110 transition duration-500 bg-gray-400 px-6 py-2 mt-10 inline rounded text-white'>Ответить</button>
          <div className='ty-4 px-2 mt-5 color-red-400'>{error && error}</div>
          <div className="flex justify-center">
          {correct === 1 && <div className='text-green-600 animate__animated animate__zoomInDown text-base'>Правильно</div>}
          {correct === 2 && <div className='text-red-900  animate__animated animate__bounceIn text-base' >Не верно!</div>}
          {correct === 3 && <div></div>}
          </div>
          <div className='flex justify-center'>{counter}</div>
        </form>
    ): (
      <Tolatter />
    )}    
    </>
    
  )
}

export default Answer