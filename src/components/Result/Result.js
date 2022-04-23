import React from 'react'
import './Result.css'
import arrowSearch from "../../images/arrowSearch.svg"
import Carusel from '../Carusel/Carusel'
import List from '../List/List'
import {
  nameMonths,
} from '../../utils/consts.js'

function Result(
  {
    hotels, setHotels, cityTitle, dateTitle, daysTitle, favorHotels, setFavorHotels
  }
) {
  function getTitleDate() {
    if (dateTitle) {
      const d = dateTitle.split('.')
      return d[0]+' '+nameMonths[d[1]]+' '+d[2]
    }
  }

  function getWordHotel() {
    if (favorHotels.length === 0) {
      return 'отелей'
    } else if (favorHotels.length === 1) {
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
              {cityTitle}
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
              {'\u00A0'}{favorHotels.length}{'\u00A0'}
            </p>
          {getWordHotel()}
        </section>

        <List
          maxHotels={5}
          hotels={hotels}
          location={'result'}
          cityTitle={cityTitle}
          dateTitle={getTitleDate()}
          daysTitle={daysTitle}

          favorHotels={favorHotels}
          setFavorHotels={setFavorHotels}
        />

      </section>
    </>
  )
}

export default Result
