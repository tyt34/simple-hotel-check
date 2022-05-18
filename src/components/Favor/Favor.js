import './Favor.scss'
import Sort from '../Sort/Sort'
import List from '../List/List'
import React, { useState, useEffect } from 'react'

function Favor({favorHotels, setFavorHotels, hotels, setHotels}) {
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
    let arrSort = favorHotels
    if (choise === 'rateUp') {
      arrSort.sort(sortRateUp)
    }
    if (choise === 'rateDown') {
      arrSort.sort(sortRateDown)
    }
    if (choise === 'costUp') {
      arrSort.sort(sortCostUp)
    }
    if (choise === 'costDown') {
      arrSort.sort(sortCostDown)
    }
    setFavorHotels([...arrSort])
  }, [choise, favorHotels.length])

  function sortCostUp(a, b) {
    if (a.priceAvg < b.priceAvg) {
      return -1;
    }
    if (a.priceAvg > b.priceAvg) {
      return 1;
    }
  }

  function sortCostDown(a, b) {
    if (a.priceAvg < b.priceAvg) {
      return 1;
    }
    if (a.priceAvg > b.priceAvg) {
      return -1;
    }
  }

  function sortRateUp(a, b) {
    if (a.stars < b.stars) {
      return -1;
    }
    if (a.stars > b.stars) {
      return 1;
    }
  }

  function sortRateDown(a, b) {
    if (a.stars < b.stars) {
      return 1;
    }
    if (a.stars > b.stars) {
      return -1;
    }
  }

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
          hotels={favorHotels} /* тут не логично что hotels={props.favorHotels} но в компоненте list привязка к пропсу отели */
          location={'favor'}
          setFavorHotels={setFavorHotels}
          nowHotels={hotels} /* отели которые сейчас на странице */
          setHotels={setHotels}
        />
      </section>
    </>
  )
}

export default Favor
