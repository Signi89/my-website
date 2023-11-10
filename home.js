'use strict'
document.querySelector('.btn').addEventListener
('click',function(){
    event.preventDefault()
    console.log(document.querySelector('.email').value);
});
 const footer = document.querySelector('#year');
 const date = new Date();
 console.log(date);
 footer.textContent = date.getFullYear();