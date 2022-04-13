import React, { useEffect } from 'react'
import './Sort.css'
import arrowSort from "../../images/arrowSort.svg"

function Sort(props) {

  function getMainClass() {
    if ((props.title === 'Рейтинг') && (props.choise === 'rateUp' || props.choise === 'rateDown')) {
      return 'sort sort-choice'
    } else if ((props.title === 'Цена') && (props.choise === 'costUp' || props.choise === 'costDown')) {
      return 'sort sort-choice'
    } else {
      return 'sort'
    }
  }

  function getClassImg(side) { // тупо перебрал все варианты
    if ((side === 'up') && (props.title === 'Рейтинг')) {
      if (props.choise === 'rateUp') {
        return 'sort__img-up sort__img-opacity'
      } else {
        return 'sort__img-up'
      }
    }
    if ((side === 'down') && (props.title === 'Рейтинг')) {
      if (props.choise === 'rateDown') {
        return 'sort__img-down sort__img-opacity'
      } else {
        return 'sort__img-down'
      }
    }
    if ((side === 'up') && (props.title === 'Цена')) {
      if (props.choise === 'costUp') {
        return 'sort__img-up sort__img-opacity'
      } else {
        return 'sort__img-up'
      }
    }
    if ((side === 'down') && (props.title === 'Цена')) {
      if (props.choise === 'costDown') {
        return 'sort__img-down sort__img-opacity'
      } else {
        return 'sort__img-down'
      }
    }
  }

  return (
    <>
    <button
      className={getMainClass()}
      onClick={() => {props.onClick(props.title)}}
    >
      <p className="sort__title">
        {props.title}
      </p>

      <section className="sort__imgs">
        <img
          alt="стрелка"
          className={getClassImg('up')}
          src={arrowSort}
        />
        <img
          alt="стрелка"
          className={getClassImg('down')}
          src={arrowSort}
        />
      </section>
    </button>
    </>
  )
}

export default Sort