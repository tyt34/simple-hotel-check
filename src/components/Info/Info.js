import React, { useState, useEffect } from 'react'
import './Info.css'
import calendarIco from '../../images/calendar.svg'
import Calendar from '../Calendar/Calendar'
import {
  getHotels, rewriteNumber
} from '../../utils/hotelApi.js'
import {
  nameMonths,
} from '../../utils/consts.js'

function Info(props) {
  const [dateFromCalendar, setDateFromCalendar] = useState(new Date())
  const [openCalend, setOpenCalend] = useState(false)
  const [place, setPlace] = useState('')
  const [date, setDate] = useState('')
  const [days, setDays] = useState('')

  useEffect( () => {
    setPlace('Москва')
    setDays(1)
    props.setCityTitle('Москва')
    const now = new Date()
    props.setDateTitle(now.getDate() + '.' + rewriteNumber(now.getMonth()+1) + '.' + now.getFullYear())
    setDate(now.getDate() + '.' + rewriteNumber(now.getMonth()+1) + '.' + now.getFullYear())

    getHotels('Москва', now.getDate() + '.' + rewriteNumber(now.getMonth()+1) + '.' + now.getFullYear(), 1)
    .then( res => {
      if (res.status !== 'error') {
        props.setDaysTitle('1')
        props.setHotels(res)
      }
    })
    .catch( e => {
      console.log(' er2 ', e)
    })

  }, [])

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
    if ((place !== '') && (date !== '') && (days !== '')) {
      getHotels(place, date, days)
      .then( res => {
        //console.log(res.status)
        if (res.status !== 'error') {
          props.setCityTitle(place)
          props.setDateTitle(date)
          props.setDaysTitle(days)
          props.setHotels(res)
        }
      })
      .catch( e => {
        console.log(' er1 ', e)
      })
    }
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
/*
блин тут кнопка должна быть привязана к инпутам, а я по тупому сделал 
*/

export default Info
