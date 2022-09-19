var myUsername = document.getElementById("usrname");
var myInput = document.getElementById("psw");
var myInput2 = document.getElementById("rePsw");
var myEmail = document.getElementById("email");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var submit = document.getElementById("submit");
var repeat = document.getElementById("repeat");

myEmail.onfocus = function () {
  document.getElementById("message4").style.display = "block";
};
// When the user clicks outside of the password field, hide the message box
myEmail.onblur = function () {
  document.getElementById("message4").style.display = "none";
};

myEmail.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters2 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/g;
  if (myEmail.value.match(lowerCaseLetters2)) {
    document.getElementById("message4").style.display = "none";
    enable(email1);
  } else {
    document.getElementById("message4").style.display = "block";
    disable(email1);
  }
};

myUsername.onfocus = function () {
  document.getElementById("message1").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myUsername.onblur = function () {
  document.getElementById("message1").style.display = "none";
};

myUsername.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters1 = /^[^@$!%*#?&^_-]*$/g;
  if (myUsername.value.match(lowerCaseLetters1)) {
    document.getElementById("message1").style.display = "none";
    enable(letter);
  } else {
    document.getElementById("message1").style.display = "block";
    disable(letter);
  }
};

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message2").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message2").style.display = "none";
};

myInput2.onfocus = function () {
  document.getElementById("message3").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput2.onblur = function () {
  document.getElementById("message3").style.display = "none";
};

myInput2.onkeyup = function () {
  if (myInput2.value === myInput.value) {
    enable(repeat);
    document.getElementById("message3").style.display = "none";
  } else {
    document.getElementById("message3").style.display = "block";
    disable(repeat);
  }
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    enable(letter1);
  } else {
    disable(letter1);
  }

  // Validate capital letters

  if (myInput.value.match(upperCaseLetters)) {
    enable(capital);
  } else {
    disable(capital);
  }

  // Validate length
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
  submit.style.backgroundColor = "red";
}

function enable(x) {
  x.classList.remove("invalid");
  x.classList.add("valid");
  submit.disabled = false;
  submit.style.backgroundColor = "green";
}

function verifyPassword() {
  alert("Đã hoàn thành form thành công.");
}
