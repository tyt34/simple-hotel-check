import React, { useState } from 'react'
import './Search.css'
import Info from '../Info/Info'
import Favor from '../Favor/Favor'
import Result from '../Result/Result'


function Search() {
  const [hotels, setHotels] = useState([])
  const [favorHotels, setFavorHotels] = useState([])
  const [cityTitle, setCityTitle] = useState(null)
  const [dateTitle, setDateTitle] = useState(null)
  const [daysTitle, setDaysTitle] = useState(null)

  return (
    <>
      <section className="search">
        <section className="search__left">
          <Info
            setHotels={setHotels}
            setCityTitle={setCityTitle}
            setDateTitle={setDateTitle}
            setDaysTitle={setDaysTitle}
          />
          <Favor
            favorHotels={favorHotels}
            setFavorHotels={setFavorHotels}
            hotels={hotels}
            setHotels={setHotels}
          />
        </section>

        <section className="search__left">
          <Result
            hotels={hotels}
            setHotels={setHotels}
            cityTitle={cityTitle}
            dateTitle={dateTitle}
            daysTitle={daysTitle}

            favorHotels={favorHotels}
            setFavorHotels={setFavorHotels}
          />
        </section>
      </section>
    </>
  )
}

export default Search
/*

let arr = [
  {
    hotelId: 4,
    hotelName: 'Отель Бурый',
    priceAvg: 12564,
    stars: 5,
    date: '27 мая 2023',
    days: 1,
    favor: true,
  },
  {
    hotelId: 5,
    hotelName: 'Отель Оранжевый',
    priceAvg: 12564,
    stars: 2,
    date: '27 мая 2023',
    days: 1,
    favor: true,
  },
  {
    hotelId: 6,
    hotelName: 'Отель обычный',
    priceAvg: 12564,
    stars: 3,
    date: '27 мая 2023',
    days: 1,
    favor: true,
  }
]
*/
