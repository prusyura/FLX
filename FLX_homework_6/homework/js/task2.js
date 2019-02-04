function moneyDiscount(){
    var a = prompt ('enter money: ');
    var b = prompt ('enter discount: ');
    if(a <= 0){
        (alert("Invalid input data"))
    }else if(a > 9999999){
        (alert("Invalid input data"))
    }else if(a === ""){
        (alert("Invalid input data"))
    }else if(isNaN(a)){
        (alert("Invalid input data"))
    }else if(b < 0){
        (alert("Invalid input data"))
    }else if(b > 99){
        (alert("Invalid input data"))
    }else if(b === ""){
        (alert("Invalid input data"))
    }else if(isNaN(b)){
        (alert("Invalid input data"))
    }else if(a > 0 || a < 9999999 || b > 0 || b < 99){
        var savemoney = a/100*b;
        var saleprice = a-savemoney;
        (alert("Price without discount: " + a+"$"));
        (alert("Discount: " + b+"%"));
        (alert("Price with discount: " +Math.floor( saleprice* 100) / 100 +"$"));
        (alert("Saved:  " +Math.floor( savemoney* 100) / 100 +"$"));
    }
}
moneyDiscount()