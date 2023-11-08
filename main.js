// // console.log('hello world')
// // console.log(888)
// // console.log ('hello' + 'world');

// // alert("Наш первый алерт");

// var a = 1;
// let b = 2;
// const c = 3;

// console.log(1000/0);
// console.log(infinity);

// console.log("text" - 1);

// console.log(NaN ** 0);

// console.log(1728273827283838272834344434n);

// let str1 = 'Anime';
// let str2 = "Naruto";
// let str3 = `Anime ${str2}`;

// console.log(str1);
// console.log(str2);
// console.log(str3);



// let check = true;
// let offCheck = false;
// console.log(4 < 1);


// let nuller = null;
// console.log(nuller);

// let a;
// console.log(a);

// typeof a;

// console.log(typeof 12345);
// console.log(typeof 10n);
// console.log(typeof false);
// console.log(typeof "cat");
// console.log(typeof "123");
// console.log(typeof null);


// document.getElementById('first').innerHTML = 'Текст';
// document.getElementById('first').innerHTML = 'Новый текст';

// console.log(7);
// console.log('Добро' + 'пожаловать' + 'на' + 'курс' + 'Виктория');
// alert ("31 октября 2023");


// let jojo = 'jojo'
// jojo = 'joji';
// console.log(jojo);

// document.querySelector('#first').innerHTML='<h1> Текст, которого нет</h1>'

// document.querySelector('p').innerHTML='Хакуна Матата'

// let inputIN = document.querySelector(".text")
// let btn = document.querySelector('.check')
// let div = document.querySelector('.out')

// btn.onclick = function(){
//     let e = inputIN.value
//    div.innerHTML += `${e}<br>`
// }


// let myhappy = prompt('Ты любишь Аниме');
// console.log(myhappy);
// // if(условие){
// //     Действие, которое должно будет быть выполнено
// // }
// if(myhappy == 'Да'){
//     div.innerHTML = '<h1>Welcome</h1>'
// }else{
//     div.innerHTML = '<h1>Тебе здесь не рады</h1>'
// }

// let a = prompt('Назовите любое число')
// console.log(a);
// if(a > 100){
//     alert('Right!')
// }


// let year = prompt("В каком году вышел ходячий замок?");
// if(year < 2004){
//     console.log("Рано");
// }
// else if(year > 2004){
//     console.log("Поздно");
// }
// else{
//     console.log("Верно");
// }

// if(year < 2004){
//     console.log("Рано");
// }
// if(year > 2004){
//     console.log("Поздно");
// }
// if(year ==2004){
//     console.log("Верно");
// }

// let day = prompt("Сколько дней в неделе?");
// Вариант классический
// let week;
// console.log(week);
// if(day == 7 ){
//     week = true
// } else {
//     week = false;
// }
// console.log(week);
// Вариант через тернарик
// let week = day == 7 ? true : false;
// console.log(week);
// Макет тернаргого оператора 
// let Результат = Условие ? Первый вариант : Второй вариант
// let Результат = (Условие) ? Первый вариант : Второй вариант

// Возведение в степень
// console.log(2 **25);
// Остаток от деления 
// console.log(5 % 3);
// ((Строка + числовое значение (слепка) * на число)
// console.log(('1' + 1) * 2);


// >< - операторы больше или меньше 
// >= <= - операторы больше или равно и меньше или равно
// == не строгое равно
// === строгое равно 
// != не равно 
// console.log("lets" > "fils");

// && Логический оператор И
// let a = 10;


// if(a < 9 && a > 5 && a == 10){
//     console.log(a);
// }

// || Логический оператор ИЛИ
// let a = 7;
// if (a < 9 || a > 5 || a == 10){
//     console.log(a);
// }


// let a = Number|prompt ("Введите переменную a");
// let b = Number|prompt ("Введите переменную b")
// let y = (a + b);
// if (y > 15){
//     console.log("Да");
// }
// if (y <= 15){
//     console.log("Нет");
// }

let a = prompt ("Введите переменную a");
let b = prompt ("Введите переменную b");
if (a === b){
    console.log(true);
}
if (a != b){
    console.log(false);
}
