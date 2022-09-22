var myUsername = document.getElementById("usrname");
var myPsw = document.getElementById("psw");
var myRePsw = document.getElementById("rePsw");
var myEmail = document.getElementById("email");
var letterUser = document.getElementById("letterUser");
var letterPsw = document.getElementById("letterPsw");
var capital = document.getElementById("capital");
var length = document.getElementById("length");
var letterRePsw = document.getElementById("letterRePsw");
var capitalRePsw = document.getElementById("capitalRePsw");
var lengthRePsw = document.getElementById("lengthRePsw");
var submit = document.getElementById("submit");
var repeat = document.getElementById("repeat");
var info1 = document.getElementById("message1");
var info2 = document.getElementById("message2");
var info3 = document.getElementById("message3");
var info4 = document.getElementById("message4");
var togglePassword = document.getElementById("togglePassword");
var togglePassword2 = document.getElementById("togglePassword2");

function showPassword() {
  if (myPsw.type === "password" && myRePsw.type === "password") {
    myPsw.type = "text";
    myRePsw.type = "text";
  } else {
    myPsw.type = "password";
    myRePsw.type = "password";
  }
  togglePassword.classList.toggle("fa-eye-slash");
  togglePassword2.classList.toggle("fa-eye-slash");
}

function show(x) {
  x.style.display = "block";
}
function hide(x) {
  x.style.display = "none";
}

function disable(x) {
  x.classList.remove("valid");
  x.classList.add("invalid");
  show(x);
  finalCheking();
}

function enable(x) {
  x.classList.remove("invalid");
  x.classList.add("valid");
  hide(x);
  finalCheking();
}

function check(x) {
  return x.classList.contains("valid");
}

function verifyPassword() {
  alert("Đã hoàn thành form thành công.");
}

function finalCheking() {
  if (
    check(letterPsw) &&
    check(capital) &&
    check(length) &&
    check(email1) &&
    check(repeat) &&
    check(letterUser)
  ) {
    submit.disabled = false;
    submit.style.opacity = 1;
  } else {
    submit.disabled = true;
    submit.style.opacity = 0.4;
  }
}

submit.disabled = true;

myUsername.onfocus = function () {
  show(info1);
};

myUsername.onblur = function () {
  hide(info1);
};

myUsername.onkeyup = function () {
  var lowerCaseLetters1 = /^[^@$!%*#?&^_-]*$/g;
  if (
    myUsername.value.match(lowerCaseLetters1) &&
    myUsername.value.length !== 0
  ) {
    hide(info1);
    enable(letterUser);
  } else {
    show(info1);
    disable(letterUser);
  }
};

myEmail.onfocus = function () {
  show(info2);
};

myEmail.onblur = function () {
  hide(info2);
};

myEmail.onkeyup = function () {
  var lowerCaseLetters2 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/g;
  if (myEmail.value.match(lowerCaseLetters2)) {
    hide(info2);
    enable(email1);
  } else {
    show(info2);
    disable(email1);
  }
};

myPsw.onfocus = function () {
  show(info3);
};

myPsw.onblur = function () {
  hide(info3);
};

myPsw.onkeyup = function () {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  if (myPsw.value.match(lowerCaseLetters)) {
    enable(letterPsw);
  } else {
    disable(letterPsw);
  }

  if (myPsw.value.match(upperCaseLetters)) {
    enable(capital);
  } else {
    disable(capital);
  }

  if (myPsw.value.length >= 8 && myPsw.value.length <= 32) {
    enable(length);
  } else {
    disable(length);
  }

  if (check(letterPsw) && check(capital) && check(length)) {
    hide(info3);
  } else {
    show(info3);
  }
};

togglePassword.onclick = function () {
  showPassword();
};

myRePsw.onfocus = function () {
  show(info4);
};

myRePsw.onblur = function () {
  hide(info4);
};

myRePsw.onkeyup = function () {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  if (myRePsw.value.match(lowerCaseLetters)) {
    enable(letterRePsw);
  } else {
    disable(letterRePsw);
  }

  if (myRePsw.value.match(upperCaseLetters)) {
    enable(capitalRePsw);
  } else {
    disable(capitalRePsw);
  }

  if (myRePsw.value.length >= 8 && myPsw.value.length <= 32) {
    enable(lengthRePsw);
  } else {
    disable(lengthRePsw);
  }

  if (myRePsw.value === myPsw.value) {
    enable(repeat);
  } else {
    disable(repeat);
  }

  if (check(letterRePsw) && check(capital) && check(length) && check(repeat)) {
    hide(info4);
  } else {
    show(info4);
  }
};

togglePassword2.onclick = function () {
  showPassword();
};

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    myUsername.value = data.username;
    myEmail.value = data.email;
    myPsw.value = data.name;
    myRePsw.value = data.name;
  });
