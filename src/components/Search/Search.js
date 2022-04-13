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
