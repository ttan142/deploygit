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
  myPsw.type === "password" && myRePsw.type === "password"
    ? ((myPsw.type = "text"), (myRePsw.type = "text"))
    : ((myPsw.type = "password"), (myRePsw.type = "password"));
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
  check(letterPsw) &&
  check(capital) &&
  check(length) &&
  check(email1) &&
  check(repeat) &&
  check(letterUser)
    ? ((submit.disabled = false), (submit.style.opacity = 1))
    : ((submit.disabled = true), (submit.style.opacity = 0.4));
}

function checkUserName() {
  var lowerCaseLetters1 = /^[^@$!%*#?&^_-]*$/g;
  myUsername.value.match(lowerCaseLetters1) && myUsername.value.length !== 0
    ? (hide(info1), enable(letterUser))
    : (show(info1), disable(letterUser));
}

function checkEmail() {
  var lowerCaseLetters2 = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/g;
  myEmail.value.match(lowerCaseLetters2)
    ? (hide(info2), enable(email1))
    : (show(info2), disable(email1));
}

function checkPsw() {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  myPsw.value.match(lowerCaseLetters) ? enable(letterPsw) : disable(letterPsw);

  myPsw.value.match(upperCaseLetters) ? enable(capital) : disable(capital);

  myPsw.value.length >= 8 && myPsw.value.length <= 32
    ? enable(length)
    : disable(length);

  check(letterPsw) && check(capital) && check(length)
    ? hide(info3)
    : show(info3);
}

function checkRePsw() {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  myRePsw.value.match(lowerCaseLetters)
    ? enable(letterRePsw)
    : disable(letterRePsw);

  myRePsw.value.match(upperCaseLetters)
    ? enable(capitalRePsw)
    : disable(capitalRePsw);

  myRePsw.value.length >= 8 && myPsw.value.length <= 32
    ? enable(lengthRePsw)
    : disable(lengthRePsw);

  myRePsw.value === myPsw.value ? enable(repeat) : disable(repeat);

  check(letterRePsw) && check(capital) && check(length) && check(repeat)
    ? hide(info4)
    : show(info4);
}

submit.disabled = true;

myUsername.onfocus = function () {
  show(info1);
  checkUserName();
};

myUsername.onblur = function () {
  hide(info1);
};

myUsername.onkeyup = function () {
  checkUserName();
};

myEmail.onfocus = function () {
  show(info2);
  checkEmail();
};

myEmail.onblur = function () {
  hide(info2);
};

myEmail.onkeyup = function () {
  checkEmail();
};

myPsw.onfocus = function () {
  show(info3);
  checkPsw();
  checkRePsw();
};

myPsw.onblur = function () {
  hide(info3);
};

myPsw.onkeyup = function () {
  checkPsw();
  checkRePsw();
};

togglePassword.onclick = function () {
  showPassword();
};

myRePsw.onfocus = function () {
  show(info4);
  checkRePsw();
};

myRePsw.onblur = function () {
  hide(info4);
};

myRePsw.onkeyup = function () {
  checkRePsw();
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
