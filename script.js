var myUsername = document.getElementById("usrname");
var myInput = document.getElementById("psw");
var myInput2 = document.getElementById("rePsw");
var myEmail = document.getElementById("email");
var letter = document.getElementById("letter");
var letter1 = document.getElementById("letter1");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var submit = document.getElementById("submit");
var repeat = document.getElementById("repeat");
var info1 = document.getElementById("message1");
var info2 = document.getElementById("message2");
var info3 = document.getElementById("message3");
var info4 = document.getElementById("message4");
var val1 = document.getElementById("val1");
var togglePassword = document.getElementById("togglePassword");
var togglePassword2 = document.getElementById("togglePassword2");

togglePassword2.onclick = function () {
  showPassword();
};
togglePassword.onclick = function () {
  showPassword();
};
function showPassword() {
  if (myInput.type === "password" && myInput2.type === "password") {
    myInput.type = "text";
    myInput2.type = "text";
  } else {
    myInput.type = "password";
    myInput2.type = "password";
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
myEmail.onfocus = function () {
  show(info4);
};

myEmail.onblur = function () {
  hide(info4);
};

myEmail.onkeyup = function () {
  var lowerCaseLetters2 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/g;
  if (myEmail.value.match(lowerCaseLetters2)) {
    hide(info4);
    enable(email1);
  } else {
    show(info4);
    disable(email1);
  }
};

myUsername.onfocus = function () {
  show(info1);
};

myUsername.onblur = function () {
  hide(info1);
};

myUsername.onkeyup = function () {
  var lowerCaseLetters1 = /^[^@$!%*#?&^_-]*$/g;
  if (myUsername.value.match(lowerCaseLetters1)) {
    hide(info1);
    enable(letter);
  } else {
    show(info1);
    disable(letter);
  }
};

myInput.onfocus = function () {
  show(info2);
};

myInput.onblur = function () {
  hide(info2);
};

myInput2.onfocus = function () {
  show(info3);
};

myInput2.onblur = function () {
  hide(info3);
};

myInput2.onkeyup = function () {
  if (myInput2.value === myInput.value) {
    enable(repeat);
    hide(info3);
  } else {
    show(info3);
    disable(repeat);
  }
};

myInput.onkeyup = function () {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    enable(letter1);
  } else {
    disable(letter1);
  }

  if (myInput.value.match(upperCaseLetters)) {
    enable(capital);
  } else {
    disable(capital);
  }

  if (myInput.value.length >= 8 && myInput.value.length <= 32) {
    enable(length);
  } else {
    disable(length);
  }
};

function disable(x) {
  x.classList.remove("valid");
  x.classList.add("invalid");
  submit.disabled = true;
  submit.style.opacity = 0.4;
}

function enable(x) {
  x.classList.remove("invalid");
  x.classList.add("valid");
  submit.disabled = false;
  submit.style.opacity = 1;
}

function verifyPassword() {
  alert("Đã hoàn thành form thành công.");
}
