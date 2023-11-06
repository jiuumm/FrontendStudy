const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
function onLoginSubmit(event) {
  //어떤 event를 넘겨준다.
  event.preventDefault(); //어떤 이벤트의 기본행동이든지 발생되지 않도록 막음
  //새로고침을 막는다.
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  //localStorage에 username을 저장한다.
  console.log(username);
  greeting.classList.remove("hidden");
  greeting.innerText = `hello ${username} !`;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  //storage에 저장이 된게 없다면
  //show the form
  loginForm.classList.remove("hidden"); //보여주고
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  greeting.classList.remove("hidden");
  greeting.innerText = `hello ${savedUsername} !`;
}
