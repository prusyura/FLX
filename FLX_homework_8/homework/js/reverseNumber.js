function reverseNumber(number){
    var revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
    return revNumber;
}
reverseNumber(123); 
reverseNumber(-456); 
reverseNumber(10000); 