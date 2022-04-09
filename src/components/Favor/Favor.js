import './Favor.css'
import Sort from '../Sort/Sort'
import List from '../List/List'
import React, { useState } from 'react'
//['rateUp', 'rateDown', 'costUp', 'costDown']
function Favor() {
  const [choise, setChoise] = useState('rateUp')

  return (
    <>
      <section className="favor">
        <p className="favor__title"> Избранное </p>

        <section className="favor_buttons">
          <Sort
            title="Рейтинг"
            choise={choise}
            setChoise={setChoise}
          />
          <Sort
            title="Цена"
            choise={choise}
            setChoise={setChoise}
          />
        </section>

        <List
          maxHotels={3}
          location={'favor'}
        />
      </section>
    </>
  )
}

export default Favor
