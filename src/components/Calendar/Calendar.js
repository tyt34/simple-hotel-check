import React from 'react';
import classnames from 'classnames';

import arrow from "../../images/back.svg"


import * as calendar from '../../utils/consts';

import './Calendar.css';

export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);

        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);

        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);
        //const date = '10, 20, 20020'
        this.setState({ date });
    };



    handleDayClick = date => {
      const getAlterMonth = (text) => {
        //console.log(text)
        if (text === 'Jan') return '01'
        if (text === 'Feb') return '02'
        if (text === 'Mar') return '03'
        if (text === 'Apr') return '04'
        if (text === 'May') return '05'
        if (text === 'Jun') return '06'
        if (text === 'Jul') return '07'
        if (text === 'Aug') return '08'
        if (text === 'Sep') return '09'
        if (text === 'Oct') return '10'
        if (text === 'Nov') return '11'
        if (text === 'Dec') return '12'
      }
      let alterDate = date.toString().split(' ')
      console.log(' ---> ', alterDate[2]+'.'+getAlterMonth(alterDate[1])+'.'+alterDate[3])
      this.setState({ selectedDate: date })

      this.props.onChange(date)
      this.props.setDate(alterDate[2]+'.'+getAlterMonth(alterDate[1])+'.'+alterDate[3])

      //console.log(' --> ', this.year)
      //console.log(' --> ', this.month)
      //console.log(' --> ', this.day)
      //console.log(' -> ', Date.parse(date))
      this.props.setOpenCalend(false)
    };

    render() {
      const { years, monthNames, weekDayNames } = this.props;
      const { currentDate, selectedDate } = this.state;

      const monthData = calendar.getMonthData(this.year, this.month);

      return (
        <div className="calendar">
          <header className="calendar__header">

            <section className="calendar__selects">
              <select
                className="calendar__select-mon"
                ref={element => this.monthSelect = element}
                value={this.month}
                onChange={this.handleSelectChange}
              >
                {monthNames.map((name, index) =>
                  <option key={name} value={index}>{name}</option>
                )}
              </select>
              <select
                className="calendar__select-year"
                ref={element => this.yearSelect = element}
                value={this.year}
                onChange={this.handleSelectChange}
              >
                {years.map(year =>
                  <option key={year} value={year}>{year} г.</option>
                )}
              </select>
            </section>

            <section className="calendar__buttons">
              <button className="calendar__but calendar__but-up" onClick={this.handlePrevMonthButtonClick}>
                <img className="calendar__arrow calendar__arrow-up" src={arrow}/>
              </button>
              <button className="calendar__but" onClick={this.handleNextMonthButtonClick}>
                <img className="calendar__arrow" src={arrow}/>
              </button>
            </section>

          </header>
            <table className="calendar__table">
            <thead>
              <tr>
                {weekDayNames.map(name =>
                  <th key={name}>{name}</th>
                )}
              </tr>
            </thead>
            <tbody className="calendar__days">
              {monthData.map((week, index) =>
                <tr
                  className="week"
                  key={index}
                >
                  {week.map((date, index) => date ?
                    <td
                      key={index}
                      className={classnames('day', {
                        'today': calendar.areEqual(date, currentDate),
                        'selected': calendar.areEqual(date, selectedDate)
                      })}
                      onClick={() => this.handleDayClick(date)}
                    >
                      {date.getDate()}
                    </td>
                  :
                    <td
                      key={index}
                    />
                  )}
                    </tr>
                  )}
            </tbody>
          </table>
        </div>
      )
    }
}

/*
<header className="calendar__header">
    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

    <select
        ref={element => this.monthSelect = element}
        value={this.month}
        onChange={this.handleSelectChange}
    >
        {monthNames.map((name, index) =>
            <option key={name} value={index}>{name}</option>
        )}
    </select>

    <select
        ref={element => this.yearSelect = element}
        value={this.year}
        onChange={this.handleSelectChange}
    >
        {years.map(year =>
            <option key={year} value={year}>{year}</option>
        )}
    </select>

    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
</header>
*/
