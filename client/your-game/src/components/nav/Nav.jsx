import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const Nav = ({name}) => {
  const username = localStorage.getItem('name')
 // console.log('username: ', username);
  // const [name, setName] = useState("")
  
  // useEffect(() => {
  //   setName(localStorage.getItem('name'))
  // }, []);

  const logoutHandler = async () => {
    localStorage.removeItem("name");
    const responce = await axios.get('http://localhost:4000/signout', { withCredentials: true })
    console.log("24", responce)
    if (responce.status === 200) {
      window.location.href = "/"
    }
  };

  return (
    <div>
      {name || username ? (
        <>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Своя Игра</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/name">
                      Привет, {name || username}
                    </Link>
                  </li>
                  <Link className="nav-link" to='/stats'>Статистика</Link>
                  <li className="nav-item">
                    <div onClick={() => logoutHandler()} className="nav-link">Выход </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Своя Игра</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/registration'>Регистрация</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/login'>Вход</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/stats'>Статистика</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      )
      }
    </div >
  )
}

export default Nav
