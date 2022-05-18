import React, { useState, useEffect } from 'react'
import './Info.scss'
import calendarIco from '../../images/calendar.svg'
import Calendar from '../Calendar/Calendar'
import {
  getHotels, rewriteNumber
} from '../../utils/hotelApi.js'

function Info({setHotels, setCityTitle, setDateTitle, setDaysTitle}) {
  const [dateFromCalendar, setDateFromCalendar] = useState(new Date())
  const [openCalend, setOpenCalend] = useState(false)
  const [place, setPlace] = useState('')
  const [date, setDate] = useState('')
  const [days, setDays] = useState('')

  useEffect( () => {
    setPlace('Москва')
    setDays(1)
    setCityTitle('Москва')
    const now = new Date()
    setDateTitle(now.getDate() + '.' + rewriteNumber(now.getMonth()+1) + '.' + now.getFullYear())
    setDate(now.getDate() + '.' + rewriteNumber(now.getMonth()+1) + '.' + now.getFullYear())

    getHotels('Москва', now.getDate() + '.' + rewriteNumber(now.getMonth()+1) + '.' + now.getFullYear(), 1)
    .then( res => {
      if (res.status !== 'error') {
        setDaysTitle('1')
        setHotels(res)
      }
    })
    .catch( e => {
      console.log(' er2 ', e)
    })

  }, [])

  function handleCalendar() {
    setOpenCalend(!openCalend)
  }

  function handleChangePlace(e) {
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
    if (/^\d+$/.test(e.target.value)) {
      setDays(e.target.value)
    }
  }

  function handleSearch() {
    if ((place !== '') && (date !== '') && (days !== '')) {
      getHotels(place, date, days)
      .then( res => {
        if (res.status !== 'error') {
          setCityTitle(place)
          setDateTitle(date)
          setDaysTitle(days)
          setHotels(res)
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
          <img alt="иконка календаря" className="calendar__ico" src={calendarIco}/>
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
тут должна была быть форма, но её нет. Но будет. Или не будет.
*/

export default Info
