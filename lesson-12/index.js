// var yaLink = document.querySelector('.ya-link');
// yaLink.setAttribute('href', 'https://ya.ru');
//
// //yaLinkBtn.addEventListener('click', function (ev) {
// //  if (yaLink.hasAttribute('href')) {
// //       yaLink.removeAttribute('href');
// //   } else {
// //       yaLink.setAttribute('href', 'https://ya.ru');
// //   }
// //});
//
// yaLink.classList.add('xl');
//
// setInterval(function () {
//     yaLink.classList.toggle('xl')
// }, 1000);
//
//
// var li = document.createElement('LI');
// li.textContent = 'ЭЛЕМЕНТ 2';
//
// var list = document.querySelector('#list');
// list.appendChild(li);
// list.appendChild(li);
//
// var li2 = document.createElement('LI');
// li2.textContent = 'ЭЛЕМЕНТ 2';
// list.appendChild(li2);
//
//
// var addLi = document.querySelector('#addLi');
// var list = document.querySelector('#list');
//
// addLi.addEventListener('click', function (ev) {
//     var liCount = document.querySelectorAll('#list > li').length;
//     var li = document.createElement('LI');
//     li.textContent = 'ЭЛЕМЕНТ' + (liCount + 1);
//     list.appendChild(li)
// });
//
//
// var list = document.querySelector('#list2');
// var li2 = document.querySelector('.li-2');
//
// var newLi = document.createElement('LI');
// newLi.textContent = 'НОВЫЙ LI';
//
// list.insertBefore(newLi, li2);
//
// var li1 = document.querySelector('.li-1');
// list.removeChild(li1);
//
//
// var box = document.querySelector('.box');
// //box.textContent = 'BOX контент';
// box.innerHTML = '<a href="https://ya.ru">BOX контент</a>';
//
//
// var comment = document.querySelector('#content');
// var content = document.querySelector('#content');
//
// comment.addEventListener('input', function (ev) {
//     content.textContent = comment.value;
// });

var box2 = document.querySelector('.box-2');
box2.style.color = 'red';
box2.style.border = '2px solid black';
box2.style.paddingTop = '20px';
box2.style.cssFloat = 'left';

box2.style.cssText = 'color: red; border: 2px solid black; padding-top: 20px; float: left';


var input = document.getElementById('inputChords');
input.addEventListener('change', function(event) {
    const round = document.querySelector('.round');
    const chords = input.value.split('.');
    round.style.left = chords[0] + 'px';
    round.style.top = chords[1] + 'px';
}, false);


var box3 = document.querySelector('.box-3');
console.log(box3.dataset.test);
console.log(box3.dataset.name);

box3.dataset.hello = 'Hello';

console.log(box3.dataset.helloWorld);





