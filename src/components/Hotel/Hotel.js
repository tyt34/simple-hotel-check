import React, { useState, useEffect } from 'react'
import './Hotel.css'
import hotelIco from '../../images/house.png'
import fullStar from '../../images/star-full.svg'
import star from '../../images/star.svg'
import like from '../../images/like.svg'
import fullLike from '../../images/like-full.svg'


function Hotel(props) {
  const [isLike, setIsLike] = useState(props.favor)

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
            <button className="hotel__like" onClick={handleLikeClick}>
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
          <p className="hotel__date"> {props.dateTitle} - {props.daysTitle} дней </p>

          <section className="hotel__bot">

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
        props.location === 'result' ?
          (
            'hotel__line-result'
          ) : (
            'hotel__line-favor'
          )
      }></div>
    </>
  )
}

export default Hotel
/*
<section className="hotel__bot">
  <section className="hotel__stars">
    {
      props.stars[0] === 'star' ?
        (
          <img className="hotel__star" alt="звезда отеля" src={fullStar}/>
        ) : (
          <img className="hotel__star" alt="звезда отеля" src={star}/>
        )
    }
    {
      props.stars[1] === 'star' ?
        (
          <img className="hotel__star" alt="звезда отеля" src={fullStar}/>
        ) : (
          <img className="hotel__star" alt="звезда отеля" src={star}/>
        )
    }
    {
      props.stars[2] === 'star' ?
        (
          <img className="hotel__star" alt="звезда отеля" src={fullStar}/>
        ) : (
          <img className="hotel__star" alt="звезда отеля" src={star}/>
        )
    }
    {
      props.stars[3] === 'star' ?
        (
          <img className="hotel__star" alt="звезда отеля" src={fullStar}/>
        ) : (
          <img className="hotel__star" alt="звезда отеля" src={star}/>
        )
    }
    {
      props.stars[4] === 'star' ?
        (
          <img className="hotel__star" alt="звезда отеля" src={fullStar}/>
        ) : (
          <img className="hotel__star" alt="звезда отеля" src={star}/>
        )
    }
    </section>
    */
/*
function handleLikeClick() {
  setIsLike(!isLike)
  //console.log(' что добавляем ', props)
  //console.log(' список избранных до ', props.favorHotels)
  const obj = {
    location: 'favor',
    hotelId: props.hotelId,
    hotelName: props.hotelName,
    priceAvg: props.priceAvg,
    stars: props.numStars,
    dateTitle: props.dateTitle,
    daysTitle: props.daysTitle,
    favor: true,
  }
  if (!props.favorHotels) {
    //let arr = []
    arr.push(obj)
    props.setFavorHotels(arr)
  } else { // тут нужна более лучшая логика
    console.log(' _________---------> ')
    props.favorHotels.push(obj)
    props.setFavorHotels(props.favorHotels)
  }
  //console.log('->  список избранных после ', props.favorHotels)
}
*/
