//1
var myString = 'Моя строка';
console.log(myString);
if (false)  
console.log(myString);

//2
var browser = {
  name: 'Chrome',
  version: '6'}
console.log(browser.name, browser.version);

//3
var browser = 
{name: 'Chrome',
version: '6'
};
browser.downloaded = function (n) {
  console.log ('Скачан ' +n+ ' дней назад')
}
browser.downloaded(5)

//4. Вывод четных значений от 1 до 20
var i;
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//5 
var x = 3;
switch (x) {
  case 1: console.log ('x равен 1'); break;
  case 2: console.log ('x равен 2'); break;
  case 3: console.log ('x равен 3'); break;
  
  default: 
  console.log(x > 3);
}

//6. Тернарный оператор
var x = Math.PI > 4 ? 'Да' : 'Нет'; 
console.log(x);
//6.1
var x = 9;
var result = (x % 2 == 0) ? 'четное' : 'нечетное';
console.log(result);
//6.2
var n = 10;
var result = (n < 20) ? 'menshe' : (n > 20) ? 'bolshe' : 'raven';
console.log(result);

//7
var i = 0;
while (i < 7) {
  console.log(++i);
}

//8. Callback
function myMath (arg1, arg2, callback) {
  alert ('Число 2 в степени 4');
  var myResult = (Math.pow (arg1,arg2));
  callback(myResult);
}
myMath (2, 4, function(res) {
  alert ('Результат ' + res);
});


