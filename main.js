//2. Инициализация переменных
var myString = 'Viktoria',
myNumber = 21,
myBool = true,
array = [1,2,3,4],
obj = {name: "Viktoria"}

console.log(myString, myNumber, myBool, array, obj)

//3. Преобразование целого в вещественный тип, с 2 знаками после запятой
var n = new Number (21);
console.log (n.toFixed(2))

//4. Префиксный и постфиксный инкремент
var i = 10;
console.log (++i)

var i = 10;
console.log (i++)

//5. Присваивание
var n = 21;
n += 20;
console.log (n)

var n = 21;
n -= 20;
console.log (n)

var n = 21;
n *= 2;
console.log (n)

var n = 21;
n /= 2;
console.log (n)

var n = 21;
n %= 11;
console.log (n)

// 6. Math
console.log (Math.PI);
console.log (Math.round(89.279));
console.log (Math.random()*10);
console.log (Math.pow(2,5))

// 7. Длина строки
console.log ('My name is Viktoria'.length);

// 8. Проверка на наличие подстроки в строке
var string = 'My name is Viktoria';
console.log (string.indexOf('is'));
console.log (string.indexOf('are'))

// 9. Переименование подстроки
var string = 'My name is Viktoria';
console.log (string.replace('Viktoria','Vikky'))

// 10. Преобразование строки в верхний и нижний регистры
var string = 'My name is Viktoria';
console.log (string.toUpperCase())
console.log (string.toLowerCase())