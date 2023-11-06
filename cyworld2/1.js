const startWord = () => {
  let myWord = document.getElementById("myword").value;
  let word = document.getElementById("word").innerText;
  let lastWord = word[word.length - 1];
  let firstWord = myWord[0];
  if (lastWord === firstWord) {
    document.getElementById("result").innerText = "정답입니다!";
    document.getElementById("word").innerText = myWord;
    document.getElementById("myword").value = ""; //정답일 때 myword의 값이 빈칸으로 바뀐다.
  } else {
    document.getElementById("result").innerText = "땡!";
    document.getElementById("myword").value = "";
  }
};
const selectNum = () => {
  let myNum = Math.floor(Math.random() * 5 + 2);
  document.getElementById("button_result").innerText =
    document.getElementById(myNum).innerText + "번 당첨!";
};
