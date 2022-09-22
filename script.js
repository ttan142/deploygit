const myUsername = document.getElementById("usrname");
const myPsw = document.getElementById("psw");
const myRePsw = document.getElementById("rePsw");
const myEmail = document.getElementById("email");
const letterUser = document.getElementById("letterUser");
const letterPsw = document.getElementById("letterPsw");
const capital = document.getElementById("capital");
const length = document.getElementById("length");
const letterRePsw = document.getElementById("letterRePsw");
const capitalRePsw = document.getElementById("capitalRePsw");
const lengthRePsw = document.getElementById("lengthRePsw");
const submit = document.getElementById("submit");
const repeat = document.getElementById("repeat");
const info1 = document.getElementById("message1");
const info2 = document.getElementById("message2");
const info3 = document.getElementById("message3");
const info4 = document.getElementById("message4");
const togglePassword = document.getElementById("togglePassword");
const togglePassword2 = document.getElementById("togglePassword2");

const showPassword = () => {
  myPsw.type === "password" ? (myPsw.type = "text") : (myPsw.type = "password");
  togglePassword.classList.toggle("fa-eye-slash");
};

const showRePassword = () => {
  myRePsw.type === "password"
    ? (myRePsw.type = "text")
    : (myRePsw.type = "password");
  togglePassword2.classList.toggle("fa-eye-slash");
};

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

const finalCheking = () => {
  check(letterPsw) &&
  check(capital) &&
  check(length) &&
  check(email1) &&
  check(repeat) &&
  check(letterUser)
    ? ((submit.disabled = false), (submit.style.opacity = 1))
    : ((submit.disabled = true), (submit.style.opacity = 0.4));
};

const checkUserName = () => {
  const lowerCaseLetters1 = /^[^@$!%*#?&^_-]*$/g;
  myUsername.value.match(lowerCaseLetters1) && myUsername.value.length !== 0
    ? (hide(info1), enable(letterUser))
    : (show(info1), disable(letterUser));
};

const checkEmail = () => {
  const lowerCaseLetters2 = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/g;
  myEmail.value.match(lowerCaseLetters2)
    ? (hide(info2), enable(email1))
    : (show(info2), disable(email1));
};

const checkBasicPsw = (x, letter, capital, length) => {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  x.value.match(lowerCaseLetters) ? enable(letter) : disable(letter);

  x.value.match(upperCaseLetters) ? enable(capital) : disable(capital);

  x.value.length >= 8 && x.value.length <= 32
    ? enable(length)
    : disable(length);
};

const checkPsw = () => {
  checkBasicPsw(myPsw, letterPsw, capital, length);
  check(letterPsw) && check(capital) && check(length)
    ? hide(info3)
    : show(info3);
};

const checkRePsw = () => {
  checkBasicPsw(myRePsw, letterRePsw, capitalRePsw, lengthRePsw);

  myRePsw.value === myPsw.value ? enable(repeat) : disable(repeat);

  check(letterRePsw) &&
  check(capitalRePsw) &&
  check(lengthRePsw) &&
  check(repeat)
    ? hide(info4)
    : show(info4);
};

submit.disabled = true;

myUsername.onfocus = () => {
  show(info1);
  checkUserName();
};

myUsername.onblur = () => {
  hide(info1);
  checkUserName();
};

myUsername.oninput = () => {
  checkUserName();
};

myEmail.onfocus = () => {
  show(info2);
  checkEmail();
};

myEmail.onblur = () => {
  hide(info2);
  checkEmail();
};

myEmail.oninput = () => {
  checkEmail();
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

myPsw.oninput = () => {
  checkPsw();
  checkRePsw();
};

togglePassword.onclick = () => {
  showPassword();
};

myRePsw.onfocus = () => {
  show(info4);
  checkRePsw();
};

myRePsw.onblur = () => {
  hide(info4);
  checkRePsw();
};

myRePsw.oninput = () => {
  checkRePsw();
};

togglePassword2.onclick = () => {
  showRePassword();
};

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    myUsername.value = data.username;
    myEmail.value = data.email;
    myPsw.value = data.name;
    myRePsw.value = data.name;
  });
