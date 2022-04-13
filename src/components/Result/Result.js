import React from 'react'
import './Result.css'
import arrowSearch from "../../images/arrowSearch.svg"
import Carusel from '../Carusel/Carusel'
import List from '../List/List'
import {
  nameMonths,
} from '../../utils/consts.js'

function Result(props) {
  function getTitleDate() {
    if (props.dateTitle) {
      const d = props.dateTitle.split('.')
      return d[0]+' '+nameMonths[d[1]]+' '+d[2]
    }
  }

  function getWordHotel() {
    if (props.favorHotels.length === 0) {
      return 'отелей'
    } else if (props.favorHotels.length === 1) {
      return 'отель'
    } else {
      return 'отеля'
    }
  }

  return (
    <>
      <section className="result">
        <section className="result__footer">
          <section className="result__info-city">
            <p className="result__title">
              Отели
            </p>
            <img className="result__img" alt="стрелка" src={arrowSearch}/>
            <p className="result__city">
              {props.cityTitle}
            </p>
          </section>
          <p className="result__date">
            {getTitleDate()}
          </p>
        </section>

        <Carusel />

        <section className="result__favor">
          Добавлено в Избранное:
            <p className="result__num">
              {'\u00A0'}{props.favorHotels.length}{'\u00A0'}
            </p>
          {getWordHotel()}
        </section>

        <List
          maxHotels={5}
          hotels={props.hotels}
          location={'result'}
          cityTitle={props.cityTitle}
          dateTitle={getTitleDate()}
          daysTitle={props.daysTitle}

          favorHotels={props.favorHotels}
          setFavorHotels={props.setFavorHotels}
        />

      </section>
    </>
  )
}

export default Result
