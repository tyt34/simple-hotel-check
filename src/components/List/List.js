import React from 'react'
import './List.css'
import Hotel from '../Hotel/Hotel'

function List(props) {
  //console.log(props)

  function getStart(stars) {
    let arrStars = []
    for (let i=0; i<5; i++) {
      if (i<stars) {
        arrStars.push('star')
      } else {
        arrStars.push('nope')
      }
    }
    return arrStars
  }

  function getDate(el) {
    if (props.location === 'result') {
      return props.dateTitle
    } else {
      return el.dateTitle
    }
  }

  function getDays(el) {
    if (props.location === 'result') {
      //console.log(' 1 ',props.daysTitle)
      return props.daysTitle
    } else {
      //console.log(' 2 ',props.daysTitle)
      return el.daysTitle
    }
  }

  function getFavor(el) {
    // такая сложная логика, потому что в список найденных попадают прямо из
    // запроса, но можно постараться их на ходу редактировать
    if (props.location === 'result') {
      if (el.favor !== undefined) {
        return false
      } else {
        let result = false
        props.favorHotels.map( h => {
          if ((h.hotelId === el.hotelId) && (h.dateTitle === props.dateTitle) && (h.daysTitle === props.daysTitle)) {
            result = true
          }
        })
        if (result) {
          return true
        } else {
          return false
        }
      }
    } else {
      return el.favor
    }
  }

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
      {
        props.hotels !== null ?
          (
            <div>
            { props.hotels.map( (el) =>
                (
                  <Hotel
                    location={props.location}
                    key={el.hotelId+getDays(el)}
                    hotelId={el.hotelId}
                    hotelName={el.hotelName}
                    priceAvg={el.priceAvg}
                    numStars={el.stars}
                    stars={getStart(el.stars)}
                    dateTitle={getDate(el)}
                    daysTitle={getDays(el)}
                    favor={getFavor(el)}

                    favorHotels={props.favorHotels}
                    setFavorHotels={props.setFavorHotels}

                    hotels={props.hotels} /* это отели из категории избранное */
                    nowHotels={props.nowHotels} /* текущие отели в компоненте result */
                    setHotels={props.setHotels}
                  />
                )
            )}
            </div>
          ) : (
            <div>  </div>
          )
      }

      </section>
    </>
  )
}

export default List

/*
<Hotel
  location={props.location}
  key={el.hotelId}
  hotelId={el.hotelId}
  hotelName={el.hotelName}
  priceAvg={el.priceAvg}
  numStars={el.stars}
  stars={getStart(el.stars)}
  dateTitle={props.dateTitle}
  daysTitle={props.daysTitle}
  favor={false}

  favorHotels={props.favorHotels}
  setFavorHotels={props.setFavorHotels}
/>
*/
/*
<>
  <section className={
    props.location === 'result' ?
      (
        'list list-result'
      ) : (
        'list list-favor'
      )
  }>
    { props.hotels.map( (el) =>
        (
          <Hotel
            location={props.location}
            key={el.hotelId}
            name={el.hotelName}
            price={el.priceAvg}
            stars={getStart(el.stars)}
            date={'lalala'}
            days={'lalal'}
            favor={el.favor}
          />
        )
    )}
  </section>
</>
*/

/*
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
*/
