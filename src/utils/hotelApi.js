import {
  pageWithHotels,
  secondArg,
  thirdArg,
  fourArg,
  daysInM,
  daysInMtypeNum
} from './consts.js'


export const getHotels = (loc, date, days) => {
  return fetch(pageWithHotels+loc+secondArg+rewriteDate(date)+thirdArg+rewriteDays(days, date)+fourArg, {
    method: 'GET',
  })
  .then (res => {
    return res.json()
  })
}

function rewriteDate(date) { // необходим год-месяц-день
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
  return countMonths((days - (daysInM[rewriteNumber(startMonth)] - startDay)), (Number(startMonth)+1), addNum, Number(startYear))
}

function countMonths(dayLeft, startMonth, num, startYear) {
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
    return countMonths(dayLeft, startMonth, num, startYear)
  } else {
    return {
      dayLeft: dayLeft, // номер дня в конечном месяце
      num: num, // сколько месяцев осталось добавить к начальному месяцу
    }
  }
}

export function rewriteNumber(m) {
  if (m < 10) {
    return '0'+m
  } else {
    return m
  }
}

function rewriteDays(days, date) {
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
      let addYear = Math.floor(finMon/12)
      return (yNum + Math.floor(finMon/12))+'-'+rewriteNumber((finMon - (addYear*12)))+'-'+rewriteNumber(resFunc.dayLeft)
    } else {
      return yNum+'-'+rewriteNumber(finMon)+'-'+rewriteNumber(resFunc.dayLeft)
    }
  } else {
    return yNum+'-'+rewriteNumber(mNum)+'-'+rewriteNumber(daysNum+dNum)
  }
} // для запроса нужен год месяц день
/*
  когда я дописал эту функцию, я понял, что использую сложный алгоритм нахождения даты.
  проще находить номер дня в году и от этого находить его месяц и день месяца
  надо будет переписать

  хорошая мысля приходит опосля
*/
