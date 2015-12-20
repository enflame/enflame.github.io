var then = new Date(2015, 8, 30)

var days = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ')
var months = 'January February March April May June July August September October November December'.split(' ')

function suffixed(number) {
  if (number > 9 && number < 21)
    return number + "th"
  var lastDigit = number % 10
  switch (lastDigit) {
   case 1: return number + "st"
   case 2: return number + "nd"
   case 3: return number + "rd"
  default: return number + "th"
  }
}

function longEventDate() {
  var weekday = days[then.getDay()]
  var month = months[then.getMonth()]
  var date = month + " " + suffixed(then.getDate())
  document.write([weekday, date, "at 7pm"].join(", "))
}

function shortEventDate() {
  document.write((then.getMonth()+1) + "/" + then.getDate())
}

function timeLeft() {
  var now = new Date
  var n = 0 | (then - now) / 86400000

  document.write(
    n >  1 ? n + " days" :
    n == 1 ? "1 day"     :
    n == 0 ? "A while"   : ""
  )
}
