//1. Счетчик с помощью ф-ции замыкания
var counter = (function () {
  var count = 0;
  return function (n) {
    count = n !== undefined ? n : count;
    return count++;
  };
}());
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(10))
console.log(counter())
//2 this
function Flower (name) {
this.name = name;

this.buyFlower = function () {
  alert( 'Я цветочек ' + this.name + ' купи меня' );
  };
} 
var Rosa = new Flower ('Роза');
Rosa.buyFlower();
//3 Геттеры, сеттеры
var cat = {
  name : 'Кот',
  status : 'кисляк',
  get fullStatus () {
    return this.name + ' ' + this.status; 
  },
  set fullStatus(value) {
var split = value.split(' ');
this.name = split[0];
this.status = split[1];
  }
};
alert(cat.fullStatus);
cat.fullStatus = 'Кот счастливчик';
alert(cat.name);
alert(cat.status);
