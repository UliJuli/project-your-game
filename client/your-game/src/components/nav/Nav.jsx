import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const username = localStorage.getItem('name')
  console.log('username: ', username);

  return (
    <div>
      {username ? (
        <>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Своя Игра</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav"></div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/name">
                    Привет, {username}
                  </Link>
                </li>
              </ul>
            </div>
         
        </nav>
  </>
  ): (
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
