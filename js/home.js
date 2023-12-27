'use strict';

let userSetionInfo = JSON.parse(localStorage.getItem('usersetion'));
let myName = document.getElementById('myname');
let myTitle = document.getElementById('mytitle');
let myEmail = document.getElementById('myemail');
let myPhone = document.getElementById('myphone');
let myAltPhone = document.getElementById('myaltphone');
let myImage = document.getElementById('myimage');
let logOut = document.getElementById('clearSetion');

myName.innerHTML +=
  userSetionInfo[0].firstName + ' ' + userSetionInfo[0].lastName;
myTitle.innerHTML = userSetionInfo[0].jopTitle;
myEmail.innerHTML = userSetionInfo[0].email;
myPhone.innerHTML = userSetionInfo[0].phone;
myAltPhone.innerHTML = userSetionInfo[0].altPhone;
myImage.setAttribute('src', userSetionInfo[0].image);

logOut.addEventListener('click', function () {
  localStorage.removeItem('usersetion');
  window.location.href = '/';
});
