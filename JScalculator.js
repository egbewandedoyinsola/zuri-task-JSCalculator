var sign = prompt('Please choose an operation: +, -, *, **, /, %')
var first = parseFloat(prompt('Kindly enter your first number'))
var second = parseFloat(prompt('Kindly enter your second number'))

var answer

if (sign == '+'){
    answer = first + second
}else if (sign == '-'){
    answer = first - second
}else if (sign == '*'){
    answer = first * second

}
// ** represents the exponential operand
else if (sign == '**'){
    answer = first ** second
}else if (sign == '/'){
    if (second==0.0){
        answer = ('Error you can not divide by zero')}
    else{
    answer = first / second}
}else if (sign == '%'){
    if (second==0.0){
        answer = ('Error you can not divide by zero')}
    else{
    answer = first / second}
    }
alert('Answer: '+ answer)