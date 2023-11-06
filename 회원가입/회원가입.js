let isStarted = false; //타이머가 작동하는지?

let auth = () => {
  //화살표함수
  if (isStarted === false) {
    //타이머가 작동중이지 않을 때
    isStarted = true;
    document.getElementById("finish").disabled = true;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("target").innerText = token;
    document.getElementById("target").style.color = "#" + token;
    let time = 180;
    let timer;

    timer = setInterval(function () {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let second = String(time % 60).padStart(2, "0"); //두자리가 되지 않았을 때 0을 입력해주세요
        document.getElementById("timer").innerText = min + ":" + second;
        time -= 1;
      } else {
        //time이 음수가 됐을때!
        document.getElementById("finish").disabled = true; //타이머가 모두 끝났을 때
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  } else {
  }
};
let mbti = () => {
  let tmp = document.getElementById("mbti1").value;
  alert("당신의 MBTI는 " + tmp + "이시군요!");
  if (tmp[0] === "E" || tmp[0] === "e") {
    document.getElementById("mbtiResult").innerText =
      "당신은 thunder planet으로 이동합니다!";
  } else {
    document.getElementById("mbtiResult").innerText =
      "당신은 water planet으로 이동합니다!";
  }
};
const ph1 = () => {
  let tmp1 = document.getElementById("ph1").value;
  if (tmp1.length === 3) {
    document.getElementById("ph2").focus();
  }
};
const ph2 = () => {
  let tmp2 = document.getElementById("ph2").value;
  if (tmp2.length === 4) {
    document.getElementById("ph3").focus();
  }
};
const result = () => {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("pw").value;
  let passwordCheck = document.getElementById("pwCheck").value;
  let ph1 = document.getElementById("ph1").value;
  let ph2 = document.getElementById("ph2").value;
  let ph3 = document.getElementById("ph3").value;

  if (
    email === "" ||
    name === "" ||
    password === "" ||
    passwordCheck === "" ||
    ph1 === "" ||
    ph2 === "" ||
    ph3 === ""
  ) {
    alert("⚠️모든 필수 입력 칸을 채워주세요!⚠️");
  } else {
    if (password !== passwordCheck) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
    } else {
      alert("🌌회원가입이 완료되었습니다!⭐");
    }
  }
};
