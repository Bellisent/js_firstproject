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

// let a = prompt ("Введите переменную a");
// let b = prompt ("Введите переменную b");
// if (a === b){
//     console.log(true);
// }
// if (a != b){
//     console.log(false);
// }


// while(условие){
//     Тело выполняется
// }

// let i = 0
// 0<3 (1 итерация)
// 1<3 (2 операция)
// 2<3 (3 операция)
// 3<3 (цикл прерывается условие ложное)
// while(i<3){
//     alert(i)
//     i++
// }

// let counter = 0
// console.log(counter++);
// counter++

// let i = 3
// while(i!=0){
//     console.log(i);
//     i--
// }

// do{
//     тело цикла
// }while(условие)

// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i<3)

// for(начало, условие, шаг){
//     тело цикла
// }

// for(let i = 0; i<3; i++){
//     alert(i)
// }

// for(let i=0; i<3; i++){
// console.log(i);
// }

// выполнить начало
// let i=0
// Если условие ==true => выполить тело, выполнить шаг
// break прерывает выполнения всего цикла
// let n=0
// for(;;){
//     console.log(n++);
//     if(n>10){
//         break
//     }
// }
// continue прерывает итерацию цикла
// for (let n=0;n<10;n++){
//     if(n%2 ===0) continue
//     alert(n)
// }

// for(let i=1; i<=10;i++){
//     console.log(i);
// }

// for(let i=0; i<20; i++){
//     if(i%2==0 && i !=0){
//         console.log(i);
//     }
// }


// for(let i=1; i<=50; i++){
//     console.log(i);
// }

// for(let i=50; i>=25; i--){
//     console.log(i);
// }

// for(let i=2500; i<=3000; i++){
//     if(i % 2 !=0){
//         console.log(i);
//     }
// }


// if(){    
// }else{}
// else if(){}

// let a = 5;
// let b = "5"
// // Тут идет проверка на ===
// switch(+b){
//     case a*1:
//         console.log('Мне кажется ты ошибся');
//         break
//     case 1:
//         console.log('Мне кажется ты не дожал');
//         break
//     case 5:
//         console.log('Ты явно делаешь успехи');
//     break
//     default:
//     console.log('Тут нет верного ответа');

// }
 

// let c = 10;
// let d = 20 
// if(d<c){
//     console.log('No good');
// }else{
//     console.log('Good');
// }

// switch(d<c){
//     case true:
//         console.log('No good');
//         break
//         default:
//             console.log('Good');
// }

// let makaka = 0;
// while(makaka < 10){
//     makaka =makaka + 1
//     switch(+makaka){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//         console.log('Лузер');
//         break
//     case 10:
//         console.log('Красавчик');     
//         break   
//     }  
// }


// let a = prompt('Сколько тебе лет?')
// switch(+a){
//     case 20:
//         console.log('Ты слишком стар');
//         break
//     case 30:
//         console.log('Ты еще стрее, этот код тоже не выполнится');
//         break
//     case "50":
//         console.log('Ты вообще древний, но твой код выполнится');
//         break
//     default:
//         console.log('Я не знаю таких цифр');
// }

// let user = null;
// let firstName = null
// let nickName = 'Victoria'
// alert(user ?? firstName ?? nickName ?? 'Аноним')

// Оператор || возвращает первое истинное значение 
// Оператор ?? возвращает первое определенное значение

// let a = 5;
// let b = prompt('Сколько сегодня градусов?')
// switch (+b){
//     case 5:
//         console.log('Верно');
//         break
//     case 10:
//         console.log('Не верно');
//         break
//     default:
//         console.log('Не сработало');
// }

// let a = prompt ('Введите число от 1 до 12') 
// switch (+a){
//         case 1:
//         case 2:
//         case 3:
//             console.log('Зима');
//             break
//         case 4:
//         case 5:
//         case 6:
//             console.log('Весна');
//             break
//         case 7:
//         case 8:
//         case 9:
//             console.log('Лето');
//             break
//         case 10:
//         case 11:
//         case 12:
//             console.log('Осень');
//             break
//     }

// let a = null;
// let b = null
// let c = 'Victoria'
// alert (a ?? b ?? c ?? 'Victoria')


//function declaration 
// function expretion
//стрелочная функция
let btn = document.querySelector('.ones')

// //function declaration 
// function one(){
    
//     console.log('function');
//     return 666
// }
// 1й варинт вызова функций
// one()

// 2й вариант вызов по клику
// btn.onclick = one

// From Borsh(){
//     ...ряд команд
//     порезать капусту 
//     поерзать лук
//     поставить кастрюлю
// }

// let a = 8 
// let b = 9
// function multiply(){
//     console.log(a * b);
// }
// multiply()

// let a = 8
// let b = 9 
// function multiply(){
//  return a*b
// }
// console.log(multiply() + 20);

// function mlt(x,y){
//     return x+y
// }
// console.log(mlt(10,30));
// либо console.log(mlt('Привет ', 'всем!'));
// то что передается в круглые скобки при вызова функции называется аргументом
// то что передается в круглые скобки при создании функции называется параметром


    // После return любые действия выполняться не будут
// function mlt(mill){
//     return mill * 1.6
// }
// console.log(mlt(100));

// function mlt(x,y){
//     return x+y
// }
// console.log(mlt(10,40));

// btn.onclick = function(){
//     console.log(123);
// }
// qwe()
// // function declaration 
// function qwe(){
//     console.log(123);
// }
// // function expretion 
// let qwer = function(){
//     console.log(321);
// }
// // Стрелочная функция 
// let qwert = () =>{
// console.log(213);
// }


let x = Number|prompt('Введите значение x')
let y = Number|prompt('Введите значение y')
function qw(x,y){
    return x+y;
}
console.log(qw(x,y));

let a = Number|prompt('Введите значение a')
let b = Number|prompt('Введите значение b')
function qwe(a,b){
    return a-b;
}
console.log(qwe(a,b));

let z = Number|prompt('Ведите значение z')
let q = Number|prompt('Введите значение q')
function qwer(z,q){
    return z*q
}
console.log(qwer(z,q));

let m = Number|prompt('Введите значение m')
let n = Number|prompt('Введите значение n')
function qwert(m,n){
    return m/n;
}
console.log(qwert(m,n));