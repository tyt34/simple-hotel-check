import React from 'react'
import './Main.css'
import imgExit from "../../images/exit.svg"
import Search from '../Search/Search'

function Main() {

  return (
    <>
      <section className="main">
        <section className="roof">
          <h1 className="roof__text">
            Simple Hotel Check
          </h1>

          <button
            className="roof__but"
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
