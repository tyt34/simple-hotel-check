import React from 'react'
import './List.css'
import Hotel from '../Hotel/Hotel'

function List(props) {
  let arr = [
    {
      id: 1,
      name: 'Отель Красный',
      price: 24642,
      stars: ['star', 'star', 'star', 'star', 'star'],
      date: '25 апреля 2022',
      days: 1,
      favor: true,
    },
    {
      id: 2,
      name: 'Отель Зеленый',
      price: 18132,
      stars: ['star', 'star', 'star', 'star'],
      date: '26 июня 2022',
      days: 1,
      favor: true,
    },
    {
      id: 3,
      name: 'Отель Синий',
      price: 12564,
      stars: ['star', 'star', 'star'],
      date: '27 мая 2023',
      days: 1,
      favor: true,
    },
    {
      id: 4,
      name: 'Отель Бурый',
      price: 12564,
      stars: ['star', 'star'],
      date: '27 мая 2023',
      days: 1,
      favor: true,
    },
    {
      id: 5,
      name: 'Отель Оранжевый',
      price: 12564,
      stars: ['star'],
      date: '27 мая 2023',
      days: 1,
      favor: false,
    },
    {
      id: 6,
      name: 'Отель обычный',
      price: 12564,
      stars: [],
      date: '27 мая 2023',
      days: 1,
      favor: false,
    }
  ]

  return (
    <>
      <section className={
        props.location === 'result' ?
          (
            'list list-result'
          ) : (
            'list list-favor'
          )
      }>
        {arr.map( (el) =>
          (
            <Hotel
              location={props.location}
              key={el.id}
              name={el.name}
              price={el.price}
              stars={el.stars}
              date={el.date}
              days={el.days}
              favor={el.favor}
            />
          )
        )}
      </section>
    </>
  )
}

export default List
