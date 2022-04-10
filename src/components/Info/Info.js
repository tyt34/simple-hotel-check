import React, { useState } from 'react'
import './Info.css'
import calendarIco from '../../images/calendar.svg'
import Calendar from '../Calendar/Calendar'
import {
  getHotels,
} from '../../utils/hotelApi.js'

function Info() {
  const [dateFromCalendar, setDateFromCalendar] = useState(new Date())
  const [openCalend, setOpenCalend] = useState(false)
  const [place, setPlace] = useState('')
  const [date, setDate] = useState('')
  const [days, setDays] = useState('')

  //console.log(dateFromCalendar)

  function handleCalendar() {
    //console.log(' -> ', value)
    setOpenCalend(!openCalend)
    console.log(dateFromCalendar)
  }

  function handleChangePlace(e) {
    //console.log(place)
    setPlace(e.target.value)
  }

  function handleChangeDate(e) {
    if (/\d+|\./.test((e.target.value))) {
      if (e.target.value.length === 2) {
        setDate(e.target.value+'.')
      } else if (e.target.value.length === 5) {
        setDate(e.target.value+'.')
      } else if (e.target.value.length < 11) {
        setDate(e.target.value)
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      setDate(date.substring(0, date.length - 1))
    }
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault()
    }
  }

  function handleChangeDays(e) {
    //console.log(days)
    setDays(e.target.value)
  }

  function handleSearch() {
    console.log(' p/de/ds ', place, '/', date, '/', days)
    getHotels(place, date, days)

    .then( res => {
      console.log(res)
      //return res.json
    })
    .catch( e => {
      console.log(' er1 ', e)
    })

  }

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
          value={place}
          onChange={handleChangePlace}

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
          value={date}
          onChange={handleChangeDate}
          onKeyDown={handleKeyDown}
          required
        />
        <button
          className="info__calendar-but"
          onClick={handleCalendar}
        >
          <img className="calendar__ico" src={calendarIco}/>
        </button>

        {
          openCalend ?
            (
              <Calendar
                onChange={setDateFromCalendar}
                setOpenCalend={setOpenCalend}
                setDate={setDate}
              />
            ) : (
              <></>
            )
        }


        <p className="info__title">
          Количество дней
        </p>
        <input
          id={`inputDays`}
          className="info__input"
          name="days"
          minLength="1"
          maxLength="30"
          value={days}
          onChange={handleChangeDays}

          required
        />

        <button
          className="info__but"
          onClick={handleSearch}
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
