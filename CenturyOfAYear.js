function findCentury(year) {
let i = 1
let result = year / 100
while (true) {
  if(result <= i ){
    return i
  } 
  i++
}
}
findCentury(1900) 