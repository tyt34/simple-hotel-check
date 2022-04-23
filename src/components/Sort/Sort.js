import './Sort.css'
import arrowSort from "../../images/arrowSort.svg"

function Sort({title, choise, setChoise, onClick}) {
  function getMainClass() {
    if ((title === 'Рейтинг') && (choise === 'rateUp' || choise === 'rateDown')) {
      return 'sort sort-choice'
    } else if ((title === 'Цена') && (choise === 'costUp' || choise === 'costDown')) {
      return 'sort sort-choice'
    } else {
      return 'sort'
    }
  }

  function getClassImg(side) { // тупо перебрал все варианты
    if ((side === 'up') && (title === 'Рейтинг')) {
      if (choise === 'rateUp') {
        return 'sort__img-up sort__img-opacity'
      } else {
        return 'sort__img-up'
      }
    }
    if ((side === 'down') && (title === 'Рейтинг')) {
      if (choise === 'rateDown') {
        return 'sort__img-down sort__img-opacity'
      } else {
        return 'sort__img-down'
      }
    }
    if ((side === 'up') && (title === 'Цена')) {
      if (choise === 'costUp') {
        return 'sort__img-up sort__img-opacity'
      } else {
        return 'sort__img-up'
      }
    }
    if ((side === 'down') && (title === 'Цена')) {
      if (choise === 'costDown') {
        return 'sort__img-down sort__img-opacity'
      } else {
        return 'sort__img-down'
      }
    }
  }

  return (
    <>
    <button
      className={getMainClass()}
      onClick={() => {onClick(title)}}
    >
      <p className="sort__title">
        {title}
      </p>

      <section className="sort__imgs">
        <img
          alt="стрелка"
          className={getClassImg('up')}
          src={arrowSort}
        />
        <img
          alt="стрелка"
          className={getClassImg('down')}
          src={arrowSort}
        />
      </section>
    </button>
    </>
  )
}

export default Sort
