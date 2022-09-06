import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



export default function Registration({setNameHendler}) {
  const [inputs, setInputs] = useState({ username: '', useremail: '', password: '', });
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Данные пользователей", inputs)
    const response = await fetch('/auth/registration', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs)
    });
    const data = await response.json()
    console.log('data: ', data);
    if (response.status === 400) {
      return alert(data.message);
    } else if (response.status === 301) {
      console.log("datareg", data)
     setNameHendler(data.name)
      const user = { id: data.id, name: data.name, email: data.email };
      localStorage.removeItem("name");
      localStorage.setItem('name', user.name);
      navigate('/');
    }
  }
  
  return (
    <div className="container">
      <h2>Зарегистрируйтесь</h2>
      <hr />
      {/* <form onSubmit={handleSubmit} > */}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
          <input type="text" name="username" value={inputs.username} onChange={inputHandler} className="form-control" id="exampleInputName1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="useremail" value={inputs.useremail} onChange={inputHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" value={inputs.password} onChange={inputHandler} className="form-control" id="exampleInputPassword1" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <hr />
    </div>
  )
}
