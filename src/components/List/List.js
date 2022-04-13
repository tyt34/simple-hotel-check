import React from 'react'
import './List.css'
import Hotel from '../Hotel/Hotel'

function List(props) {
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
      return props.daysTitle
    } else {
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
