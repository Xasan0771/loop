
var userAnswer = +prompt("son kriting")
var deg = +prompt ("soning darajasini kriting")
let k = 1


while(isNaN(userAnswer) || userAnswer == 0){

    var userAnswer = +prompt("bu son emas son kriting")
    var deg = +prompt("bu son emas son kriting")
}

for (let i = 1; i <= deg; i++) {
    k = k * userAnswer
       
}
alert(k)
