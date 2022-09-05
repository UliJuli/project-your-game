import React, {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const onAnswer = () => {return}

const Answer = ({onAnswer}) => {
  const [value, setValue]= useState('')
  const [error, setError] = useState('')
  const [answer, setAnswer] = useState('')
  const [correct, setCorrect] = useState(3)

  useEffect(() => {
    const takeAnswer = async () => {
      const response = await axios.get('http://localhost:4000/answer/1')
      setAnswer(response.data)
      console.log(answer);
    }
    takeAnswer()
  }, [])
  

  const submitHandlear = async (e) => {
   setError('')
   e.preventDefault();

    if(value.trim().length === 0) {
      setError('Введи ответ, не выпендривайся')
    } else if (value.toLowerCase() === answer.answer.toLowerCase()) {
      setCorrect(1)
      setTimeout(() => {
        onAnswer()
      }, 2000);
    } else {
      setCorrect(2)
    }
    
    
  }
  return (
    <form onSubmit={submitHandlear}  className="flex justify-center flex-col">
      <h1 className="text-center mb-5">{answer.question}</h1>
    <input type="text" 
    onChange={event => setValue(event.target.value)}
    className='border py-2 px-4 mb-2 w-full outline-0' 
    placeholder='Введите ваш ответ'
    value={value}
    />
    
    <button type='submit'className='border py-2 px-4 bg-yellow-400 hover:text-white mt-4'>Ответить</button>
    <div className='ty-4 px-2 mt-5 color-red-400'>{error && error}</div>
    <div className="flex justify-center">
    {correct === 1 && <div className='ty-4 px-2 mt-5 '>Правильно</div>}
    {correct === 2 && <div className='ty-4 px-2 mt-5 '>Не верно!</div>}
    {correct === 3 && <div className='ty-4 px-2 mt-5 '></div>}
    </div>
  </form>
  )
}

export default Answer