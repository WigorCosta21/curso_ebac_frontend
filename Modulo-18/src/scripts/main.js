const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')



const zeroleft = (n) => {
  return n < 10 ? `0${n}` : n
}

const startClock = setInterval(() => {
  const dateToday = new Date()
  const dateHours = dateToday.getHours()
  const dateMinutes = dateToday.getMinutes()
  const dateSeconds = dateToday.getSeconds()
  const dateDay = dateToday.getDay()
  const dateMonth = dateToday.getMonth()
  const dateYear = dateToday.getFullYear()

  hours.innerText = zeroleft(dateHours)
  minutes.innerText = zeroleft(dateMinutes)
  seconds.innerText = zeroleft(dateSeconds)
  day.innerText = zeroleft(dateDay)
  month.innerText = zeroleft(dateMonth + 1)
  year.innerText = dateYear

}, 1000)


