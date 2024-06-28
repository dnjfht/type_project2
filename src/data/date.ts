import {DateTime} from 'luxon'

// 랜덤 과거 날짜
export const makeRandomPastDate = () => {
  const value = new Date().valueOf()

  const n = 100000
  return new Date(value - Math.floor(Math.random() * n * n))
}

// 상대적 날짜
export const makeRelativeDate = (date: Date) =>
  DateTime.fromJSDate(date).startOf('day').toRelative()
export const randomRelativeDate = makeRelativeDate(makeRandomPastDate())

// 일,달,년도 만들기
export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_FULL)
export const randomDatMonthYear = () => makeDayMonthYear(makeRandomPastDate())
