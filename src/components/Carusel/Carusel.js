import './Carusel.scss'
import React, { useState, useEffect } from 'react'
import img1 from '../../images/carusel/slider-img-1.png'
import img2 from '../../images/carusel/slider-img-2.png'
import img3 from '../../images/carusel/slider-img-3.png'
import img4 from '../../images/carusel/slider-img-4.png'
import img5 from '../../images/carusel/slider-img-5.png'
import img6 from '../../images/carusel/slider-img-6.png'
import img7 from '../../images/carusel/slider-img-7.png'

import disableScroll from 'disable-scroll';

function Carusel() {
  const [items, setItems] = useState([
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4},
    {img: img5},
    {img: img6},
    {img: img7},
  ])

  const [imgLeft, setImgLeft] = useState(0)
  const [imgMid, setImgMid] = useState(1)
  const [imgRig, setImgRig] = useState(2)

  useEffect(() => {
    let timer = setInterval(() => {
      setImgLeft(nextNum(imgLeft))
      setImgMid(nextNum(imgMid))
      setImgRig(nextNum(imgRig))
    }, 2561)
  //}, 6666)

    return () => clearInterval(timer)
  }, [imgLeft]);

  function nextNum(num) {
    let newNum = num + 1
    if (newNum > items.length-1) {
      return 0
    } else {
      return newNum
    }
  }

  function prevNum(num) {
    let newNum = num - 1
    if (newNum === -1) {
      return items.length-1
    } else {
      return newNum
    }
  }

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setImgLeft(prevNum(imgLeft))
      setImgMid(prevNum(imgMid))
      setImgRig(prevNum(imgRig))
    } else {
      setImgLeft(nextNum(imgLeft))
      setImgMid(nextNum(imgMid))
      setImgRig(nextNum(imgRig))
    }
  }

  return (
    <>
      <section
        className="carusel"
        tabIndex="0"
        onWheel={handleWheel}
        onMouseEnter={(e) => {disableScroll.on()}} // чтобы страница не прокручивалась при наведение на компонент карусель
        onMouseLeave={(e) => {disableScroll.off()}} // чтобы страница не прокручивалась при наведение на компонент карусель
      >
        <img
          className="carusel__img"
          alt="картинка"
          src={items[imgLeft].img}
        />
        <img
          className="carusel__img"
          alt="картинка"
          src={items[imgMid].img}
        />
        <img
          className="carusel__img"
          alt="картинка"
          src={items[imgRig].img}
        />
      </section>
    </>
  )
}

export default Carusel
