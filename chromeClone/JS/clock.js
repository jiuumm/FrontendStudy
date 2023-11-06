const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //date.getHours()는 숫자이므로 padStart를 쓰려면 string으로 바꿔야한다.
  const minutes = String(date.getMinutes()).padStart(2, "0"); //2자리가 안되면 0을 앞에 채워줘라!
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}: ${minutes}: ${seconds}`;
}

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);
getClock();
setInterval(getClock, 1000); //getClock을 1초마다 반복해준다.
