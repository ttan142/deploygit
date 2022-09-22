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

const showPassword = (x, y) => {
  x.type === "password" ? (x.type = "text") : (x.type = "password");
  y.classList.toggle("fa-eye-slash");
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

myRePsw.oninput = () => {
  checkRePsw();
};

togglePassword2.onclick = () => {
  showPassword(myRePsw, togglePassword2);
};

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    myUsername.value = data.username;
    myEmail.value = data.email;
    myPsw.value = data.name;
    myRePsw.value = data.name;
  });
