import {
  pageWithHotels,
  secondArg,
  thirdArg,
  fourArg,
  daysInMtypeNum
} from './consts.js'


export const getHotels = (loc, date, days) => {
  //console.log(newrewriteDays(days, date))
  console.log(pageWithHotels + loc + secondArg + rewriteDate(date) + thirdArg + newrewriteDays(days, date) + fourArg)
  return fetch(pageWithHotels + loc + secondArg + rewriteDate(date) + thirdArg + newrewriteDays(days, date) + fourArg, {
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

export function rewriteNumber(m) {
  if (m < 10) {
    return '0'+m
  } else {
    return m
  }
}

function newrewriteDays(days, date) {
  let dd = Number(date.split('.')[0])
  let dm = Number(date.split('.')[1])
  let dy = Number(date.split('.')[2])
  let dayInYear = dd // номер дня в году. например 15 апреля 105 день в году.
  for (let mon in daysInMtypeNum) {
    if (Number(mon) < dm) {
      if ((Number(mon) === 2) && (leapYear(dy) )) { // проверка на то, что текущий год высокосный
        dayInYear = dayInYear + daysInMtypeNum[mon] + 1
      } else {
        dayInYear = dayInYear + daysInMtypeNum[mon]
      }
    }
  }
  let sumAllDays = dayInYear + Number(days) // это сумма дня от которого идет отсчет и количества дней проживания
  if ( (sumAllDays / (dayInThisYear(dy))) <= 1) {
    /*
    return {
      day: findDayInYear({resultYear: dy, sumAllDays}).d,
      mon: findDayInYear({resultYear: dy, sumAllDays}).m,
      year: dy
    }
    */
    return dy + '-' + rewriteNumber(findDayInYear({resultYear: dy, sumAllDays}).m) + '-' + rewriteNumber(Number(findDayInYear({resultYear: dy, sumAllDays}).d))
  } else {
    /*
    return {
      day: findDayInYear(howMuchAddYears(dy, sumAllDays)).d,
      mon: findDayInYear(howMuchAddYears(dy, sumAllDays)).m,
      year: howMuchAddYears(dy, sumAllDays).resultYear
    }
    */
    return howMuchAddYears(dy, sumAllDays).resultYear + '-' + rewriteNumber(findDayInYear(howMuchAddYears(dy, sumAllDays)).m) + '-' + rewriteNumber(Number(findDayInYear(howMuchAddYears(dy, sumAllDays)).d))
  }
}

function dayInThisYear(year) {
  if (leapYear(year)) {
    return 366
  } else {
    return 365
  }
}

function findDayInYear({resultYear, sumAllDays}) {
  for (let mon in daysInMtypeNum) {
    if (sumAllDays < daysInMtypeNum[mon]) {
      return {m: mon, d: sumAllDays}
    } else {
      if ((Number(mon) === 2) && (leapYear(resultYear) )) { // проверка на то, что текущий год высокосный
        sumAllDays = sumAllDays - daysInMtypeNum[mon] + 1
      } else {
        sumAllDays = sumAllDays - daysInMtypeNum[mon]
      }
      if (sumAllDays === 0) {
        return {m: mon, d: daysInMtypeNum[mon]}
      }
    }
  }
}

function howMuchAddYears(resultYear, sumAllDays) {
  if ( (sumAllDays / dayInThisYear(resultYear)) <= 1) {
    sumAllDays = sumAllDays - dayInThisYear(resultYear)
    resultYear = resultYear + 1
    return {resultYear, sumAllDays}
  } else {
    if (Math.floor((sumAllDays / dayInThisYear(resultYear))) === 1) {
      sumAllDays = sumAllDays - dayInThisYear(resultYear)
      resultYear = resultYear + 1
      return {resultYear, sumAllDays}
    } else {
      sumAllDays = sumAllDays - dayInThisYear(resultYear)
      resultYear = resultYear + 1
      if (leapYear(resultYear)) {
        if ((sumAllDays / dayInThisYear(resultYear)) <= 1) {
          return {resultYear, sumAllDays}
        } else {
          return howMuchAddYears(resultYear, sumAllDays)
        }
      } else {
        if ((sumAllDays / dayInThisYear(resultYear)) <= 1) {
          return {resultYear, sumAllDays}
        } else {
          return howMuchAddYears(resultYear, sumAllDays)
        }
      }
    }
  }
}

// прошлые функции нахождения конечно даты

/*
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
}
*/

/*
function howManyAddMonths(days, startMonth, startDay, startYear) { //
  let addNum = 0
  return countMonths((days - (daysInM[rewriteNumber(startMonth)] - startDay)), (Number(startMonth)+1), addNum, Number(startYear))
}
*/
/*
function countMonths(dayLeft, startMonth, num, startYear) {
  if (startMonth > 12) {
    startMonth = 1
    startYear = startYear + 1
  }
  let dayInThisMon
  if (startMonth === 2) {
    leapYear(startYear)
    if (leapYear(startYear)) {
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
*/
