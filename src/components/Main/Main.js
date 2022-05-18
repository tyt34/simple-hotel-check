import React from 'react'
import './Main.scss'
import { useNavigate} from 'react-router-dom'
import imgExit from "../../images/exit.svg"
import Search from '../Search/Search'

function Main() {
  const navigate = useNavigate()
  function handleClickExit(e) {
    e.preventDefault()
    navigate('/auth')
  }

  return (
    <>
      <section className="main">
        <section className="roof">
          <h1 className="roof__text">
            Simple Hotel Check
          </h1>

          <button
            className="roof__but"
            onClick={handleClickExit}
          >
            <p className="roof__title"> Выйти </p>
            <img
              className="roof__img"
              alt="Кнопка для выхода из профиля"
              src={imgExit}
            />
          </button>
        </section>

        <Search />

      </section>
    </>
  )
}

export default Main
