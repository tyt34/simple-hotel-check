import React, { useState, useEffect } from 'react'
import './Hotel.css'
import hotelIco from '../../images/house.png'
import fullStar from '../../images/star-full.svg'
import star from '../../images/star.svg'
import like from '../../images/like.svg'
import fullLike from '../../images/like-full.svg'
import {
  rusMonthToEn
} from '../../utils/consts.js'
const fourSpace = "\u00A0\u00A0\u00A0\u00A0"
const doubleSpace = "\u00A0\u00A0\u00A0\u00A0"

function Hotel(props) {
  if (props.location === 'favor') {
    console.log(props.hotels[props.hotels.length-1].hotelId === props.hotelId)
    console.log(props)
    console.log(((props.location === 'result') && (props.hotels[props.hotels.length-1].hotelId !== props.hotelId)))
  }

  const [isLike, setIsLike] = useState(props.favor)

  function getDaysHotel() {
    if (Number(props.daysTitle) === 1) {
      return doubleSpace+props.daysTitle+' день'
    } else if ((Number(props.daysTitle) === 2) || (Number(props.daysTitle) === 3) || (Number(props.daysTitle) === 4)) {
      return doubleSpace+props.daysTitle+' дня'
    } else {
      return doubleSpace+props.daysTitle+' дней'
    }
  }

  function getDateHotel() {
    if (props.location === 'favor') {
      for (let key in rusMonthToEn) {
        if (key === props.dateTitle.split(' ')[1]) {
          return props.dateTitle.split(' ')[0]+' '+rusMonthToEn[key]+', '+props.dateTitle.split(' ')[2]+fourSpace
        }
      }
      return props.dateTitle+fourSpace
    } else {
      return props.dateTitle+fourSpace
    }
  }

  function handleLikeClick() {
    setIsLike(!isLike)
    let obj = {
      location: '',
      hotelId: props.hotelId,
      hotelName: props.hotelName,
      priceAvg: props.priceAvg,
      stars: props.numStars,
      dateTitle: props.dateTitle,
      daysTitle: props.daysTitle,
      favor: '',
    }
    if (props.location === 'result') { // лайк для поиска
      if (!isLike) { // лайк поставили
        let newArr = props.favorHotels.slice()
        obj.location = 'favor'
        obj.favor = true
        newArr.push(obj)
        props.setFavorHotels(newArr)
      } else { // лайк убрали
        let newArr = props.favorHotels.slice()
        let indexForDel
        newArr.map( (h, i) => {
          if ((h.hotelId === props.hotelId) && (h.dateTitle === props.dateTitle) && (h.daysTitle === props.daysTitle)) {
            indexForDel = i
          }
        })
        newArr.splice(indexForDel, 1)
        props.setFavorHotels(newArr)
      }
    } else { // лайк для категории избранное
      if (isLike) { // лайк убрали и другого не дано
        // удаление из категории избранное
        let newArr = props.hotels.slice()
        let indexForDel
        newArr.map( (h, i) => {
          if ((h.hotelId === props.hotelId) && (h.dateTitle === props.dateTitle) && (h.daysTitle === props.daysTitle)) {
            indexForDel = i
          }
        })
        newArr.splice(indexForDel, 1)
        props.setFavorHotels(newArr)
        // удаление из категории текущего поиска
        let nowHotels = props.nowHotels.slice()
        let indexForDelFromNow
        nowHotels.map( (h, i) => {
          if ((h.hotelId === props.hotelId) && (h.priceAvg === props.priceAvg)) {
            indexForDelFromNow = i
            h.favor = false
          }
        })
        props.setHotels(nowHotels)
      }
    }
  }

  useEffect( () => {
    if (props.favor === false) setIsLike(false)
  }, [props.favor])

  function rewritePrice() {
    let arrBase = props.priceAvg.toString().split('.')
    let arrSecond = arrBase[0].toString().split('')
    arrSecond.splice(-3, 0, ' ')
    return arrSecond.join('')
  }

  return (
    <>
      <section className="hotel">
        {
          props.location === 'result' ?
            (
              <img className="hotel__ico" alt="иконка домика" src={hotelIco}/>
            )
              :
            (
              <> </>
            )
        }

        <section className={
          props.location === 'result' ?
            (
              'hotel__info hotel__info-result'
            ) : (
              'hotel__info hotel__info-favor'
            )
        }>
          <section className="hotel__top">
            <p className="hotel__name"> {props.hotelName} </p>
            <button className={
              props.location === 'result' ?
                (
                  'hotel__like hotel__like-result'
                ) : (
                  'hotel__like'
                )
            } onClick={handleLikeClick}>
              {
                isLike === true ?
                  (
                    <img
                      className="hotel__favor"
                      alt="кнопка для добавления / удаления из избранного"
                      src={fullLike}
                    />
                  ) : (
                    <img
                      className="hotel__favor"
                      alt="кнопка для добавления / удаления из избранного"
                      src={like}
                    />
                  )
              }
            </button>
          </section>
          <p className={
            props.location === 'result' ?
              (
                'hotel__date hotel__date-result'
              ) : (
                'hotel__date'
              )
          }> {getDateHotel()} — {getDaysHotel()} </p>

          <section className={
            props.location === 'result' ?
              (
                'hotel__bot hotel__bot-result'
              ) : (
                'hotel__bot'
              )
          }>

            <section className="hotel__stars">
              { props.stars.map( (n, i) =>
                n === 'star' ?
                  (
                    <img key={i} className="hotel__star" alt="звезда отеля" src={fullStar}/>
                  ) : (
                    <img key={i} className="hotel__star" alt="звезда отеля" src={star}/>
                  )
              )}
            </section>

            <section className="hotel__price">
              <p className="hotel__title">
                Price:
              </p>
              <p className="hotel__cost">
                {rewritePrice()} ₽
              </p>
            </section>
          </section>
        </section>
      </section>

      <div className={
        ((props.location === 'favor') && (props.hotels[props.hotels.length-1].hotelId !== props.hotelId)) ?
          (
            'hotel__line-favor'
          ) : (
            ''
          )
      }></div>

      <div className={
        (props.location === 'result') ?
          (
            'hotel__line-result'
          ) : (
            ''
          )
      }></div>

    </>
  )
}

export default Hotel

/*
(props.location === 'result') && (props.hotels[props.hotels.length-1].hotelId !== props.hotelId) ?
удаление линии у последнего отеля из категории избранное
*/
