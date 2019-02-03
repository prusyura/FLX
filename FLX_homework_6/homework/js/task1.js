function quadratic(){
    var a = prompt ('enter: a');
    var b = prompt ('enter: b');
    var c = prompt ('enter: c');
    var d = b*b-4*a*c;
    var x = Math.floor(d);
    if(x < 0){
        (alert("no solution"));
    }else if(a === "" || b === "" || c === ""){
        (alert("Invalid input data"))
    }else if(isNaN(a) || isNaN(b) || isNaN(c)){
        (alert("Invalid input data"))
    }else if(a === 0 || b === 0 || c === 0){
        (alert("Invalid input data"))
    }else if(x === 0){
        (alert("x=0"));
    }else if(x > 0){
        var x1 = (-b-x)/(2*a);
        var x2 = (-b+x)/(2*a); 
        (alert("x1 =" + x1));
        (alert("x2 =" + x2));
    }  
}
quadratic();