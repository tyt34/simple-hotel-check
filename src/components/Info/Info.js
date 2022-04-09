import React, { useState } from 'react'
import './Info.css'
import calendarIco from '../../images/calendar.svg'

function Info() {
  const [value, onChange] = useState(new Date());

  console.log(value)

  return (
    <>
      <section className="info">
        <p className="info__title">
          Локация
        </p>
        <input
          id={`inputCity`}
          className="info__input"
          name="city"
          minLength="1"
          maxLength="30"

          required
        />

        <p className="info__title">
          Дата заселения
        </p>
        <input
          id={`inputDate`}
          className="info__input"
          name="date"
          minLength="1"
          maxLength="30"

          required
        />
        <button
          className="info__calendar-but"
        >
          <img className="calendar__ico" src={calendarIco}/>
        </button>


        <p className="info__title">
          Количество дней
        </p>
        <input
          id={`inputDays`}
          className="info__input"
          name="days"
          minLength="1"
          maxLength="30"

          required
        />

        <button
          className="info__but"
        >
          <p className="info__but-text"> Найти </p>
        </button>
      </section>
    </>
  )
}

export default Info
/*
type={props.typeInput}
value={props.value}
onChange={props.onChange}
*/
