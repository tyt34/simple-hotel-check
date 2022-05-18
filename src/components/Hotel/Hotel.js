import React, { useState, useEffect } from 'react'
import './Hotel.scss'
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

function Hotel(
  {
    location, hotelId, hotelName, priceAvg, numStars,
    stars, dateTitle, daysTitle, favor, favorHotels,
    setFavorHotels, hotels, nowHotels, setHotels
  }
) {
  const [isLike, setIsLike] = useState(favor)

  function getDaysHotel() {
    if (Number(daysTitle) === 1) {
      return doubleSpace+daysTitle+' день'
    } else if ((Number(daysTitle) === 2) || (Number(daysTitle) === 3) || (Number(daysTitle) === 4)) {
      return doubleSpace+daysTitle+' дня'
    } else {
      return doubleSpace+daysTitle+' дней'
    }
  }

  function getDateHotel() {
    if (location === 'favor') {
      for (let key in rusMonthToEn) {
        if (key === dateTitle.split(' ')[1]) {
          return dateTitle.split(' ')[0]+' '+rusMonthToEn[key]+', '+dateTitle.split(' ')[2]+fourSpace
        }
      }
      return dateTitle+fourSpace
    } else {
      return dateTitle+fourSpace
    }
  }

  function handleLikeClick() {
    setIsLike(!isLike)
    let obj = {
      location: '',
      hotelId: hotelId,
      hotelName: hotelName,
      priceAvg: priceAvg,
      stars: numStars,
      dateTitle: dateTitle,
      daysTitle: daysTitle,
      favor: '',
    }
    if (location === 'result') { // лайк для поиска
      if (!isLike) { // лайк поставили
        let newArr = favorHotels.slice()
        obj.location = 'favor'
        obj.favor = true
        newArr.push(obj)
        setFavorHotels(newArr)
      } else { // лайк убрали
        let newArr = favorHotels.slice()
        let indexForDel
        newArr.map( (h, i) => {
          if ((h.hotelId === hotelId) && (h.dateTitle === dateTitle) && (h.daysTitle === daysTitle)) {
            indexForDel = i
          }
        })
        newArr.splice(indexForDel, 1)
        setFavorHotels(newArr)
      }
    } else { // лайк для категории избранное
      if (isLike) { // лайк убрали и другого не дано
        // удаление из категории избранное
        let newArr = hotels.slice()
        let indexForDel
        newArr.map( (h, i) => {
          if ((h.hotelId === hotelId) && (h.dateTitle === dateTitle) && (h.daysTitle === daysTitle)) {
            indexForDel = i
          }
        })
        newArr.splice(indexForDel, 1)
        setFavorHotels(newArr)
        // удаление из категории текущего поиска
        let nowHotels = nowHotels.slice()
        let indexForDelFromNow
        nowHotels.map( (h, i) => {
          if ((h.hotelId === hotelId) && (h.priceAvg === priceAvg)) {
            indexForDelFromNow = i
            h.favor = false
          }
        })
        setHotels(nowHotels)
      }
    }
  }

  useEffect( () => {
    if (favor === false) setIsLike(false)
  }, [favor])

  function rewritePrice() {
    let arrBase = priceAvg.toString().split('.')
    let arrSecond = arrBase[0].toString().split('')
    arrSecond.splice(-3, 0, ' ')
    return arrSecond.join('')
  }

  return (
    <>
      <section className="hotel">
        {
          location === 'result' ?
            (
              <img className="hotel__ico" alt="иконка домика" src={hotelIco}/>
            )
              :
            (
              <> </>
            )
        }

        <section className={
          location === 'result' ?
            (
              'hotel__info hotel__info-result'
            ) : (
              'hotel__info hotel__info-favor'
            )
        }>
          <section className="hotel__top">
            <p className="hotel__name"> {hotelName} </p>
            <button className={
              location === 'result' ?
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
            location === 'result' ?
              (
                'hotel__date hotel__date-result'
              ) : (
                'hotel__date'
              )
          }> {getDateHotel()} — {getDaysHotel()} </p>

          <section className={
            location === 'result' ?
              (
                'hotel__bot hotel__bot-result'
              ) : (
                'hotel__bot'
              )
          }>

            <section className="hotel__stars">
              {
                stars.map( (n, i) =>
                  n === 'star' ?
                    (
                      <img key={i} className="hotel__star" alt="звезда отеля" src={fullStar}/>
                    ) : (
                      <img key={i} className="hotel__star" alt="звезда отеля" src={star}/>
                    )
                )
              }
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
        ((location === 'favor') && (hotels[hotels.length-1].hotelId !== hotelId)) ?
          (
            'hotel__line-favor'
          ) : (
            ''
          )
      }></div>

      <div className={
        (location === 'result') ?
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
