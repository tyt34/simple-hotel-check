import React from 'react'
import './Sort.css'

import arrowSort from "../../images/arrowSort.svg"
//<img className="calendar__arrow" src={arrow}/>

function Sort(props) {

  return (
    <>
    <button
      className="sort"
    >
      <p className="sort__title">
        {props.title}
      </p>

      <section className="sort__imgs">
        <img className="sort__img-up" src={arrowSort}/>
        <img className="sort__img-down" src={arrowSort}/>
      </section>
    </button>
    </>
  )
}

export default Sort
