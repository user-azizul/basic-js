// Practise 1 Start Here
function newString() {
  let x = document.querySelector('.demo1');
  const strr = 'Hello World';

  const newStrr = strr.substring(1, strr.length - 1);
  x.textContent = 'the result is :- ' + newStrr;
  x.classList.toggle('none');




}

// practice 2 Start here

function timeConvert() {
  const num = 150;
  const hour = Math.floor(num / 60);
  const minute = num % 60;

  const result = 'the result is :- ' + hour + ':' + minute;

  let x = document.querySelector('.demo2');
  x.textContent = result;
  x.classList.toggle('none');


}

//Practice 3 Is Start here 
function strrReverse() {
  const givenStrr = 'javascript';
  let x3 = document.querySelector('.demo3');
  const result3 = givenStrr.split("").reverse().join("");
  x3.textContent = result3;
  x3.classList.toggle('none');



}

//Practice 4 is Start from Here
function maxArry() {
  const arr = [10, 20, 22];
  let x4 = document.querySelector('.demo4');
  const resul4 = Math.max(...arr);
  x4.textContent = resul4;
  x4.classList.toggle('none');

}


//Practice 4 is Start from Here
function check() {
  let str = 'javascritp';
  let char = 'a';
  return str.includes(char);
}
function final5() {
let result5 = check();
let r = result5.toString();
if (r === 'true') {
  console.log('i am true');
  let x5 = document.querySelector('.demo5');
  x5.classList.toggle('none');  
  x5.textContent = 'i am true';}}
