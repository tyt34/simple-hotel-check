import React from 'react'
import './Hotel.css'
import hotelIco from '../../images/house.png'
import fullStar from '../../images/star-full.svg'
import star from '../../images/star.svg'
import like from '../../images/like.svg'
import fullLike from '../../images/like-full.svg'


function Hotel(props) {
  //console.log('hotel ', props)

  return (
    <>
      <section className="hotel">
        {
          props.location === 'result' ?
            (
              <img className="hotel__ico" alt="иконка домика" src={hotelIco}/>
            ) : (<div> </div>)
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
            <p className="hotel__name"> {props.name} </p>
            <button className="hotel__like">
              {
                props.favor ?
                  (
                    <img className="hotel__favor" alt="кнопка для добавления / удаления из избранного" src={fullLike}/>
                  ) : (
                    <img className="hotel__favor" alt="кнопка для добавления / удаления из избранного" src={like}/>
                  )
              }
            </button>
          </section>
          <p className="hotel__date"> {props.date} - {props.days} дней </p>

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

              <section className="hotel__price">
                <p className="hotel__title">
                  Price:
                </p>
                <p className="hotel__cost">
                  {props.price} Р
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
