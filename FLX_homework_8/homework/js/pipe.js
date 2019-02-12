function addOne(x) {
    return x + 1;
}
function pipe(){
    var n=arguments[0];
    var res=arguments[1](n);
    for(var i=2;i<arguments.length;i++){
        res=arguments[i](res);
    }
    return res;
}
pipe(1, addOne, addOne)