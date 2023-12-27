'use strict';

let userSetionInfo = JSON.parse(localStorage.getItem('usersetion'));
console.log(userSetionInfo);
let myName = document.getElementById('myname');
let myTitle = document.getElementById('mytitle');
let myEmail = document.getElementById('myemail');
let myPhone = document.getElementById('myphone');
let myAltPhone = document.getElementById('myaltphone');
let myImage = document.getElementById('myimage');
let logOut = document.getElementById('clearSetion');

myName.innerHTML += userSetionInfo.firstName + ' ' + userSetionInfo.lastName;
myTitle.innerHTML = userSetionInfo.jopTitle;
myEmail.innerHTML = userSetionInfo.email;
myPhone.innerHTML = userSetionInfo.phone;
myAltPhone.innerHTML = userSetionInfo.altPhone;
myImage.setAttribute('src', userSetionInfo.image);

logOut.addEventListener('click', function () {
  localStorage.removeItem('usersetion');
  window.location.href = '/';

  console.log(document.yourEmail);

  // clear yourEmail value
  // yourEmail.value = '';
});
