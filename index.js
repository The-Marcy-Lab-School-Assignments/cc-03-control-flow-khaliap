//1
function countFromOne(num){
  for (let i =1; i <= num; i ++)
  console.log(i)
}
//countFromOne(5)
//2
function countEveryOdd(num1){
    for(let i = 1; i <num1; i++){
      if(i%2 !== 0){
       console.log(i)   
      }
}
}
//countEveryOdd(10)
//3
function isNegative(number){
  if(number<0){
      return true 
  }else {
}return false
}
//console.log(isNegative(-5))
//4
function betweenFiveAndTwenty(num){
    if(num>=5 && num<=20){
  return true
}else{
    return false
}
}
//console.log(betweenFiveAndTwenty(10))
//5 
function isAllLowerCase(string){
  if(string === string.toLowerCase()){
      return true
  }else {
      return false
  }
}
console.log(isAllLowerCase())
