"use strict";
  
// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
  document.querySelector('#from').addEventListener('keyup', (e) => {
    
    document.querySelector('span').textContent = document.querySelector('#from').value;
  });

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
  document.querySelector('.messageBtn').addEventListener('click', (e) => {
    document.querySelector('.message').classList. add('animate_animated');
    document.querySelector('.message').classList. add('animate_fadeInLeftBig');
    document.querySelector('.message').style.visibility = 'visible';
  });

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

let style = document.createElement('style');
style.textContent = '.error{background: indianred;}';
document.querySelector('head').appendChild(style);

document.querySelector('form').addEventListener('submit', (event) => {
  document.querySelectorAll('.form-control').forEach(elem => {
    if(elem.value == '')  {
      event.preventDefault();
      elem.classList.add('error');
    };
  });
});
document.querySelector('form').addEventListener('input', (e) => {
  e.target.value != ''? e.target.classList.remove('error'): e.target.classList.add('error');
});
