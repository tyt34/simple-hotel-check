import './Favor.css'
import Sort from '../Sort/Sort'
import List from '../List/List'
import React, { useState, useEffect } from 'react'

function Favor(props) {
  //console.log(props.favorHotels)
  const [choise, setChoise] = useState('rateUp') // варианты ['rateUp', 'rateDown', 'costUp', 'costDown']

  function handleChoiseClick(type) {
    if (type === 'Рейтинг') {
      if (choise === 'rateUp') {
        setChoise('rateDown')
      } else {
        setChoise('rateUp')
      }
    } else {
      if (choise === 'costUp') {
        setChoise('costDown')
      } else {
        setChoise('costUp')
      }
    }
  }

  useEffect( () => {
    if (choise === 'rateUp') {
      let arrSort = props.favorHotels
      console.log(arrSort)
    }
  }, [choise, props.favorHotels])

  return (
    <>
      <section className="favor">
        <p className="favor__title"> Избранное </p>

        <section className="favor_buttons">
          <Sort
            title="Рейтинг"
            choise={choise}
            setChoise={setChoise}
            onClick={handleChoiseClick}
          />
          <Sort
            title="Цена"
            choise={choise}
            setChoise={setChoise}
            onClick={handleChoiseClick}
          />
        </section>

        <List
          maxHotels={3}
          hotels={props.favorHotels} /* тут не логично что hotels={props.favorHotels} но в компоненте list привязка к пропсу отели */
          location={'favor'}
          setFavorHotels={props.setFavorHotels}
          nowHotels={props.hotels} /* отели которые сейчас на странице */
          setHotels={props.setHotels}
        />
      </section>
    </>
  )
}

export default Favor

/*
<Hotel
  location={props.location}
  key={el.hotelId}
  hotelId={el.hotelId}
  hotelName={el.hotelName}
  priceAvg={el.priceAvg}
  stars={getStart(el.stars)}
  dateTitle={props.dateTitle}
  daysTitle={props.daysTitle}
  favor={false}

  favorHotels={props.favorHotels}
  setFavorHotels={props.setFavorHotels}
/>
*/
