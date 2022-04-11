import React from 'react'
import './Result.css'
import arrowSearch from "../../images/arrowSearch.svg"
import Slider from '../Slider/Slider'
import List from '../List/List'
import {
  nameMonths,
} from '../../utils/consts.js'

function Result(props) {

  function getTitleDate() {
    //console.log(props.dateTitle)
    if (props.dateTitle) {
      const d = props.dateTitle.split('.')
      return d[0]+' '+nameMonths[d[1]]+' '+d[2]
    }
  }

  return (
    <>
      <section className="result">
        <section className="result__footer">
          <p className="result__title">
            Отели
          </p>
          <img className="result__img" alt="стрелка" src={arrowSearch}/>
          <p className="result__city">
            {props.cityTitle}
          </p>
          <p className="result__date">
            {getTitleDate()}
          </p>
        </section>

        <Slider />

        <section className="result__favor">
          Добавлено в Избранное:
            <p className="result__num">
              {'\u00A0'}3{'\u00A0'}
            </p>
          отеля
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
