export const pageWithHotels = 'https://engine.hotellook.com/api/v2/cache.json?location='
export const secondArg = '&currency=rub&checkIn='
export const thirdArg = '&checkOut='
const numNeedHotels = 10  // это количество отелей которое будет получено из запроса
export const fourArg = '&limit='+numNeedHotels
export const trueEasyPass = /[a-zA-Z0-9]{8,}/
export const trueEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
// источник регулярного выражения
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export const daysInM = {
  '01': 31,
  '02': 28,
  '03': 31,
  '04': 30,
  '05': 31,
  '06': 30,
  '07': 30,
  '08': 31,
  '09': 30,
  '10': 31,
  '11': 30,
  '12': 31
}
export const daysInMtypeNum = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 30,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}
export const nameMonths = {
  '01': 'января',
  '02': 'февраля',
  '03': 'марта',
  '04': 'апреля',
  '05': 'мая',
  '06': 'июня',
  '07': 'июля',
  '08': 'августа',
  '09': 'сентября',
  '10': 'октября',
  '11': 'ноября',
  '12': 'декабря'
}
export const rusMonthToEn = {
  'января': 'January',
  'февраля': 'February',
  'марта': 'March',
  'апреля': 'April',
  'мая': 'May',
  'июня': 'June',
  'июля': 'July',
  'августа': 'August',
  'сентября': 'September',
  'октября': 'October',
  'ноября': 'Novermber',
  'декабря': 'December'
}
const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];
export const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  Novermber: 10,
  December: 11
}
export function areEqual(a, b) {
  if (!a || !b) return false;

  return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
  );
}
export function isLeapYear(year) {
  return !((year % 4) || (!(year % 100) && (year % 400)));
}
export function getDaysInMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DAYS_IN_MONTH[month];

  if (isLeapYear(year) && month === Month.February) {
      return daysInMonth + 1;
  } else {
      return daysInMonth;
  }
}
export function getDayOfWeek(date) {
  const dayOfWeek = date.getDay();

  return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}
export function getMonthData(year, month) {
  const result = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
      result[i] = [];

      for (let j = 0; j < DAYS_IN_WEEK; j++) {
          if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
              result[i][j] = undefined;
          } else {
              result[i][j] = new Date(year, month, day++);
          }
      }
  }

  return result;
}
