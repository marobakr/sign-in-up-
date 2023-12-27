'use strict';
let yourEmail = document.getElementById('youremail');
let yourPassword = document.getElementById('yourpassword');
let logInBtn = document.getElementById('login');
let messageWorring = document.getElementById('worning');

let getLastEmail = JSON.parse(localStorage.getItem('users'));
if (getLastEmail != null) {
  yourEmail.value = getLastEmail[getLastEmail.length - 1].email;
}
logInBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let data = JSON.parse(localStorage.getItem('users'));
  if (data != null) {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].email === yourEmail.value &&
        data[i].password === yourPassword.value
      ) {
        localStorage.setItem('usersetion', JSON.stringify(data[i]));
        console.log(localStorage.getItem('usersetion'));
        messageWorring.classList.replace('text-danger', 'text-success');
        messageWorring.innerHTML = 'Processing your request';
        setTimeout(() => {
          window.location = '/home.html';
        }, 2000);
      }
      if (
        data[i].email != yourEmail.value &&
        data[i].password != yourPassword.value
      ) {
        messageWorring.innerHTML =
          "'Incorrect email or password. Please try again.' ";
      }
    }
  }
  // if tow inpu doesn't have any value
  if (
    (data === null && yourEmail.value.length == 0) ||
    yourPassword.length == 0
  ) {
    messageWorring.innerHTML = 'Please enter both email and password';
  }
  //  if the user doesn't register

  if (
    data === null &&
    yourEmail.value.length != 0 &&
    yourPassword.length != 0
  ) {
    messageWorring.innerHTML =
      "you haven't signed up yet. Please create an account";
  }

});
