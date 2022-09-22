const $ = document.getElementById.bind(document);
const myUsername = $("usrname");
const myPsw = $("psw");
const myRePsw = $("rePsw");
const myEmail = $("email");
const letterUser = $("letterUser");
const letterPsw = $("letterPsw");
const capital = $("capital");
const length = $("length");
const letterRePsw = $("letterRePsw");
const capitalRePsw = $("capitalRePsw");
const lengthRePsw = $("lengthRePsw");
const submit = $("submit");
const repeat = $("repeat");
const info1 = $("message1");
const info2 = $("message2");
const info3 = $("message3");
const info4 = $("message4");
const togglePassword = $("togglePassword");
const togglePassword2 = $("togglePassword2");

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

const show = (x) => {
  x.style.display = "block";
};
const hide = (x) => {
  x.style.display = "none";
};

const disable = (x) => {
  x.classList.remove("valid");
  x.classList.add("invalid");
  show(x);
  finalCheking();
};

const enable = (x) => {
  x.classList.remove("invalid");
  x.classList.add("valid");
  hide(x);
  finalCheking();
};

const check = (x) => x.classList.contains("valid");

const verifyPassword = () => {
  alert("Đã hoàn thành form thành công.");
};

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

myUsername.onfocus = () => {
  show(info1);
  checkUserName();
};

myUsername.onblur = () => {
  hide(info1);
  checkUserName();
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

myEmail.onfocus = () => {
  show(info2);
  checkEmail();
};

myEmail.onblur = () => {
  hide(info2);
  checkEmail();
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

myPsw.onfocus = () => {
  show(info3);
  checkPsw();
  checkRePsw();
};

myPsw.onblur = () => {
  hide(info3);
  checkPsw();
  checkRePsw();
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

togglePassword.onclick = () => {
  showPassword(myPsw, togglePassword);
};

myRePsw.onfocus = () => {
  show(info4);
  checkRePsw();
};

myRePsw.onblur = () => {
  hide(info4);
  checkRePsw();
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
