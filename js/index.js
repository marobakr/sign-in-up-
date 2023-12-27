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
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].email == yourEmail.value &&
      data[i].password === yourPassword.value
    ) {
      localStorage.setItem('usersetion', JSON.stringify(data));
      window.location = '/home.html';
    }
    if (
      data[i].email != yourEmail.value ||
      data[i].password != yourPassword.value
    ) {
      messageWorring.innerHTML =
        "'Incorrect email or password. Please try again.' ";
    }
    if (yourEmail.value.length == 0 || yourPassword.length == 0) {
      messageWorring.innerHTML = 'Please enter both email and password';
    }
  }
});
