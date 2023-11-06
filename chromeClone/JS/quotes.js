const quotes = [
  {
    quote: "도와줄 수 있지만 끊어내는 것은 너의 몫이야",
    author: "박이진 교수님",
  },
  {
    quote: "가장 큰 위험은 위험을 감수하지 않는 것입니다.",
    author: "Bob Dylan",
  },
  {
    quote: "당신이 무엇을 믿든 간에, 그것이 가능하다면 가능하다",
    author: "Napoleon Hil",
  },
  {
    quote: "우리는 늘 자신이 우리에게 생각하는 만큼 강하다.",
    author: "R.W. Emerson",
  },
  {
    quote: "성공은 자신감의 기반 위에 세워진다.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "삶은 고난이 아니라 의미를 찾는 여정입니다.",
    author: "Victor Frankl",
  },
  {
    quote: "어제가 없다면 오늘은 아무 의미가 없습니다.",
    author: "Haruki Murakami",
  },
  {
    quote:
      "삶은 내가 생각하는 것보다 더 복잡하지만, 항상 더 나은 방향으로 나아갈 수 있습니다.",
    author: "Yann Martel",
  },
  {
    quote: "인생은 그 자체로 거대한 대화이자 모험입니다.",
    author: "Oliver Wendell Holmes Sr.",
  },
  {
    quote: "네 시작은 미약하였으나 네 나중은 심히 창대하리라",
    author: "욥 8:7",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
