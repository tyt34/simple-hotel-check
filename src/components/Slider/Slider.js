import React from 'react'
import './Slider.css'
import img1 from "../../images/slider-img-1.png"

function Slider() {

  return (
    <>
      <section className="slider">
          <img className="result__img" src={img1}/>
          <img className="result__img" src={img1}/>
          <img className="result__img" src={img1}/>
      </section>
    </>
  )
}

export default Slider
