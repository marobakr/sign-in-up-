'use strict';
// prev
let feadLists = document.querySelectorAll('fieldset');
let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
// signIn
let email = document.getElementById('email');
let jopTitle = document.getElementById('jop');
let password = document.getElementById('password');
let firstName = document.getElementById('fristname');
let lastName = document.getElementById('lastname');
let signIn = document.getElementById('backtologin');
let activeProgress = document.querySelectorAll('#progressbar li');
let progressBar = document.querySelector('.progress-bar');
let phone = document.getElementById('number');
let altPhone = document.getElementById('altnumber');
let uploadImage = document.getElementById('upload');
let valueOfAllInputsNotEmptyHaveAlreadySignUp =
  document.getElementById('emptyvalue');
let allUsers = [];
// next and prev
let prevOrNext = 0;
let widthProgress = '25';
let progressGrow;
let imageSrc;

if (localStorage.getItem('users') !== null) {
  allUsers = JSON.parse(localStorage.getItem('users'));
}
console.log(localStorage.getItem('users'));
//  swapp to another form
btnNext.addEventListener('click', function (e) {
  e.preventDefault();
  // To Check If The Input Not Empty
  let nonEmptyCount = 0;
  let inputs = feadLists[prevOrNext].querySelectorAll('input');
  // Loop For All Inputs In Each FeadLists
  inputs.forEach((input) => {
    if (input.value != '') {
      nonEmptyCount++;
    }
  });

  // At least one input is not empty.
  if (nonEmptyCount < inputs.length) {
    // Show message if input empty
    valueOfAllInputsNotEmptyHaveAlreadySignUp.classList.replace(
      'text-success',
      'text-danger'
    );
    valueOfAllInputsNotEmptyHaveAlreadySignUp.innerHTML =
      'Please fill in all required fields.';
    // All inputs are not empty.
  } else {
    // Show message if input not empty
    valueOfAllInputsNotEmptyHaveAlreadySignUp.classList.replace(
      'text-danger',
      'text-success'
    );
    valueOfAllInputsNotEmptyHaveAlreadySignUp.innerHTML =
      'All inputs are filled. Processing your request';
    feadLists[prevOrNext].classList.add('d-none');
    ++prevOrNext;
    // add class active at progress
    activeProgress[prevOrNext].classList.add('active');
    progressGrow = widthProgress * (prevOrNext + 1);
    progressBar.style.width = `${progressGrow}%`;
    if (prevOrNext >= 1) {
      btnPrev.classList.replace('d-none', 'action-button-previous');
    }
    if (prevOrNext > 2) {
      this.classList.add('d-none');
      btnPrev.classList.add('d-none');
    }

    feadLists[prevOrNext].classList.remove('d-none');
  }
});

//  back to another form
btnPrev.addEventListener('click', function (e) {
  switch (prevOrNext) {
    case 2:
      progressGrow = 50;
      console.log('2');
      break;
    case 1:
      progressGrow = 25;

      console.log('1');
      break;
  }
  progressBar.style.width = `${progressGrow}%`;

  // remove class active at progress
  activeProgress[prevOrNext].classList.remove('active');
  feadLists[prevOrNext].classList.add('d-none');
  feadLists[--prevOrNext].classList.remove('d-none');
  if (prevOrNext < 1) {
    btnPrev.classList.replace('action-button-previous', 'd-none');
  }
  if (prevOrNext <= 2) {
    btnNext.classList.remove('d-none');
  }
});

function handleFileSelect(callback) {
  if (uploadImage.files && uploadImage.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      imageSrc = e.target.result;
      callback(imageSrc); // Call the callback with the image source
    };

    reader.readAsDataURL(uploadImage.files[0]);
  }
}

// Add User Function

function addUser() {
  handleFileSelect(function (result) {
    let user = {
      email: email.value,
      jopTitle: jopTitle.value,
      password: password.value,
      firstName: firstName.value,
      phone: phone.value,
      altPhone: altPhone.value,
      lastName: lastName.value,
      image: result,
    };
    allUsers.push(user);
    localStorage.setItem('users', JSON.stringify(allUsers));
  });
}

signIn.addEventListener('click', (e) => {
  let countToCheck = 0;
  e.preventDefault();
  console.log(allUsers.length >= 0);
  console.log(allUsers);

  if (allUsers.length >= 1) {
    allUsers.forEach((user) => {
      if (user.email === email.value) {
        valueOfAllInputsNotEmptyHaveAlreadySignUp.classList.replace(
          'text-success',
          'text-danger'
        );
        ++countToCheck;
        valueOfAllInputsNotEmptyHaveAlreadySignUp.innerHTML =
          'this email already exite';
      } else {
        valueOfAllInputsNotEmptyHaveAlreadySignUp.innerHTML =
          'You Have Successfully Signed Up';
        addUser();
      }
      if (countToCheck >= 1) {
        signIn.innerHTML = 'Log In';

        // Set a timeout of 5 minutes (300,000 milliseconds)
        setTimeout(function () {
          window.location.href = '/';
        }, 200);
      }
    });
  } else {
    addUser();
  }
});