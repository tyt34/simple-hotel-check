import React from 'react'
import './Result.css'
import arrowSearch from "../../images/arrowSearch.svg"
import Slider from '../Slider/Slider'
import List from '../List/List'

function Result(props) {

  return (
    <>
      <section className="result">
        <section className="result__footer">
          <p className="result__title">
            Отели
          </p>
          <img className="result__img" src={arrowSearch}/>
          <p className="result__city">
            Москва
          </p>
          <p className="result__date">
            09 апреля 2022
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
          location={'result'}
        />

      </section>
    </>
  )
}

export default Result
