//1
var loremArr = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum',
'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo,eos', 'Vero, quos'];

function TheWord (arr, letter) {
  return arr.filter(function(word) {
    return word.indexOf(letter) > -1;
  })
}
alert(TheWord(loremArr, 'o'));
//2.1
var d = new Date;
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
var hours = d.getHours();
var minutes = d.getMinutes();
document.write(year + '-0' + month + '-0' + day + ', ' + hours + ':' + minutes);
document.write("<br /><br />");
//2.2
 var time = new Date();
document.write (time.toLocaleString());
//3
 var weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
console.log(weekdays[(new Date()).getDay()]);
//4
function getLocalDay (d) {
   var date = new Date(d);
   var day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}
alert(getLocalDay('2019-02-09'));
//5
let formatter = new Intl.DateTimeFormat("uk-UA", {
  year: "numeric",
  month: "long",
  day: "numeric"
});
function getDateAgo (d, days) {
  var date = new Date(d);
  date.setDate(date.getDate() - days);
  return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/gu, '$1');
};
console.log( getDateAgo('2019-02-09', 5) );