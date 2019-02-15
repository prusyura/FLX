// 1 Task
function findTypes(){
    var res=[];
    for(var i = 0; i < arguments.length; i++){
        res.push(typeof arguments[i])
    }
    return res;
}
findTypes("number"); // returns [“string”] 
findTypes(null, 5, "hello"); // returns [“object”, “number”, “string”]
// 2 Task
function executeforEach(mas, obj){
    for(var i = 0; i < mas.length; i++){
        obj(mas[i]);
    }
}
executeforEach([1, 2, 3], (el) => console.log(el));
// 3 Task
function mapArray(mas, func) {
    var arr = [];
    executeforEach(mas, function(el) {
        arr.push(func(el));
    });
    return arr;
}
mapArray([2, 5, 8], function(el){ 
    return el + 3
}); // returns [5, 8, 11]
// 4 Task
function filterArray(mas, func) {
    var newArr = [];
    executeforEach(mas, function(el) {
        if (func(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}
filterArray([2, 5, 8], function(el) {
     return el > 3 
    }); // returns [5, 8]
// 5 Task 
var data =
[
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
]  
function getAmountOfAdultPeople() {
    return filterArray(data, function (el) {
        return el.age > 18;
    }).length;
}
getAmountOfAdultPeople(data);// returns 3
// 6 Task  
function getGreenAdultBananaLovers(){
    var arr = [];
    filterArray(data, function (el) {
        if(el.age > 18 && el.favoriteFruit === "bananna" && el.eyeColor === "green"){
            arr.push(el.name);
        }
        return arr;
    });
}
getGreenAdultBananaLovers(data);// returns [‘George]
// 7 Task     
function keys(obj){
    var array = [];
    for(var key in obj){
        array.push(key);
    }
    return array;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});
// 8 Task
function values(obj){
    var arrNew = [];
    for(var key in obj){
        arrNew.push(obj[key]);
    }
    return arrNew;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});// returns [1, 2, 3]
// 9 Task 
function showFormattedDate(date){
    let day = date.getDate();
    let month = date.toLocaleString('en-US', { month: 'short' })
    let year = date.getFullYear();
    return ("Date: " + day + " of "+ month + ", "+ year);
}
showFormattedDate(new Date('2019-01-27T01:10:00'));// returns ‘Date: 27 of Jan, 2019’
// 10 Task
function isEvenYear(date){
    let year = date.getFullYear();
    if(year % 2 === 0){
        return true;
    }else{
        return false;
    }
}
isEvenYear(new Date('2019-01-27T01:10:00')) // false
// 11 Task
function isEvenMonth(date){
    let month = date.getMonth()+1;
    if(month % 2 === 0){
        return true;
    }else{
        return false;
    }
}
isEvenMonth(new Date('2019-02-27T01:10:00')) // true