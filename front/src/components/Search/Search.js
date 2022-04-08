import React from 'react'
import './Search.css'
import Info from '../Info/Info'
import Favor from '../Favor/Favor'
import Result from '../Result/Result'


function Search() {

  return (
    <>
      <section className="search">
        <section className="search__left">
          <Info />
          <Favor />
        </section>

        <section className="search__left">
          <Result />
        </section>
      </section>
    </>
  )
}

export default Search
