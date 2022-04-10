import {
  pageWithHotels,
  secondArg,
  thirdArg,
  fourArg,
  daysInM,
  daysInMtypeNum
} from './consts.js'
//import axios from 'axios'
/*
export const getHotels = (loc, date, days) => {
  console.log(pageWithHotels+loc+secondArg+rewriteDate(date)+thirdArg+rewriteDays(days, date)+fourArg)
  axios.get(pageWithHotels+loc+secondArg+rewriteDate(date)+thirdArg+rewriteDays(days, date)+fourArg)
}
*/

export const getHotels = (loc, date, days) => {
  console.log(pageWithHotels+loc+secondArg+rewriteDate(date)+thirdArg+rewriteDays(days, date)+fourArg)
  //return fetch('https://api.nomoreparties.co/beatfilm-movies', {
  return fetch(pageWithHotels+loc+secondArg+rewriteDate(date)+thirdArg+rewriteDays(days, date)+fourArg, {
  //return fetch(pageWithHotels, {
    method: 'GET',
    /*
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Content-Type': 'application/json',
    }
    */
  })
  .then (res => {
    //console.log(res)
    return res.json()
  })
}

function rewriteDate(date) { // необходим год-месяц-день
  //console.log(' rde: ', date.split('.'))
  //console.log(date.split('.')[2]+'-'+date.split('.')[1]+'-'+date.split('.')[0])
  return date.split('.')[2]+'-'+date.split('.')[1]+'-'+date.split('.')[0]
}

function leapYear(year) {
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    return true
  } else {
    return false
  }
}

function howManyAddMonths(days, startMonth, startDay, startYear) { //
  let addNum = 0
  //console.log(' -> ',(days - (daysInM[startMonth] - startDay)))
  //console.log('1->',days)
  //console.log('11-> ', startMonth)
  //console.log('1111-> ', daysInMtypeNum['4'])
  //console.log('2->',daysInM[startMonth])
  //console.log('3->',startDay)
  return countMonths((days - (daysInM[rewriteNumber(startMonth)] - startDay)), (Number(startMonth)+1), addNum, Number(startYear))
}

function countMonths(dayLeft, startMonth, num, startYear) { // осталось / первый месяц от которого вести отсчет
  //console.log(' 003 ', dayLeft)
  if (startMonth > 12) {
    startMonth = 1
    startYear = startYear + 1
  }
  let dayInThisMon
  if (startMonth === 2) {
    leapYear(startYear)
    if (leapYear(startYear)) {
      console.log(' высокосный ')
      dayInThisMon = daysInMtypeNum[startMonth] + 1
    } else {
      dayInThisMon = daysInMtypeNum[startMonth]
    }
  } else {
    dayInThisMon = daysInMtypeNum[startMonth]
  }
  num = num + 1
  if (dayLeft > dayInThisMon) {
    dayLeft = dayLeft - dayInThisMon
    startMonth = startMonth + 1
    //console.log(' 01 ')
    return countMonths(dayLeft, startMonth, num, startYear)
  } else {
    //console.log(' 02 ')
    //console.log(dayLeft)
    return {
      dayLeft: dayLeft, // сколько дней осталось добавить к начальному дню
      num: num, // сколько месяцв осталось добавить к начальному месяцу
    }
  }
}

function rewriteNumber(m) {
  if (m < 10) {
    //console.log(' 1 ')
    return '0'+m
  } else {
    //console.log(' 2')
    return m
  }
}

function rewriteDays(days, date) { // необходим год-месяц-день, котороый должен быть получен при суме дней с date
  const m = date.split('.')[1]
  const mNum = Number(m)
  const y = date.split('.')[2]
  const yNum = Number(y)
  const d = date.split('.')[0]
  const dNum = Number(d)
  const daysNum = Number(days)
  if ( (dNum+daysNum) > daysInM[m] ) {
    const resFunc = howManyAddMonths(daysNum, mNum, dNum, yNum)
    const finMon = resFunc.num + mNum
    if (finMon > 12) {
      //console.log(' 1 ')
      let addYear = Math.floor(finMon/12)
      return (yNum + Math.floor(finMon/12))+'-'+rewriteNumber((finMon - (addYear*12)))+'-'+rewriteNumber(resFunc.dayLeft)
    } else {
      //console.log(' 2 ')
      //console.log(resFunc)
      return yNum+'-'+rewriteNumber(finMon)+'-'+rewriteNumber(resFunc.dayLeft)
    }
  } else {
    //console.log(' 3 ')
    //console.log()
    //console.log(daysNum+dNum)
    return yNum+'-'+rewriteNumber(mNum)+'-'+rewriteNumber(daysNum+dNum)
  }
} // для запроса нужен год месяц день
/*
  когда я дописал эту функцию, я понял, что использую сложный алгоритм нахождения даты.
  проще находить номер дня в году и от этого находить его месяц и день месяца
  надо будет переписать

  хорошая мысля приходит опосля
*/
