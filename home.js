'use strict'
document.querySelector('.btn').addEventListener
('click',function(){
    event.preventDefault()
    console.log(document.querySelector('.email').value);
});
