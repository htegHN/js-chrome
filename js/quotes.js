const quotes = [
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘로",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해.",
    author: "찰리 채플린",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 하버드",
  },
  {
    quote: "사랑이 없는 삶은 꽃도 열매도 없는 나무와 같다. ",
    author: "칼릴 지브란",
  },
  {
    quote: "무엇이든 사랑하는 방법은 잃어버릴 수 있다는 것을 깨닫는 것이다.",
    author: "길버트 K. 체스터턴",
  },
  {
    quote: "인생은 자신을 찾는 것이 아닙니다. 인생은 자신을 만드는 것입니다.",
    author: "조지 버나드 쇼",
  },
  {
    quote: "성공하는 사람이 되지 말고 가지 있는 사람이 되십시오. ",
    author: "알버트 아인슈타인",
  },
  {
    quote: "성공은 매일 반복되는 작은 노력의 합이다.",
    author: "로버트 콜리어",
  },
  {
    quote:
      "아마추어들은 앉아서 영감을 기다리고, 프로는 그냥 일어나서 일하러 간다.",
    author: "스티븐 킹",
  },
  {
    quote:
      "인생에서 가장 큰 후회 중 하나는 자신이 아니라 다른 사람들이 원하는 모습이 되는 것이다.",
    author: "섀넌 L. 엘더",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
