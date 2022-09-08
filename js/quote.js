const $quoteList = document.querySelector("#quoteList ul");
  
const quotes = [
  {
    quote: "변명 중에서도 가장 어리석고 못난 변명은 '시간이 없어서'라는 변명이다.",
    author: "에디슨",
  },
  {
    quote: "컴퓨터는 쓸모가 없다. 그것은 그냥 대답만 할 수 있다.",
    author: "Pablo Picasso",
  },
  {
    quote: "어차피 코딩할꺼 행복하게 코딩하자.",
    author: "김시은",
  },
  {
    quote: "초과근무 시간 증가는 생상성 감소 기법이다. 스트레스를 받는 사람들은 머리가 빨리 돌아가지 않는 법이다.",
    author: "Tom DeMarco",
  },
  {
    quote: "goto에 소스꼬인줄 모른다.",
    author: "개발자 속담",
  },
  {
    quote: "사표쓴다 사표쓴다 하면서 프로젝트 세개 한다.",
    author: "개발자 속담",
  },
  {
    quote: "게으름이 자신의 가장 좋은 친구이다. 한 번에 자동화할 수 있는 것을 두 번 하지 마라.",
    author: "개발자 속담",
  },
  {
    quote: "백업을 안하면 삼대가 내리 흉하다.",
    author: "개발자 속담",
  },
  {
    quote: "버그 잡자고 빌드 다 뽀갠다.",
    author: "개발자 속담",
  },
  {
    quote: "고객을 ‘유저’라고 부르는 산업은 딱 두 개가 있다. 마약 그리고 IT",
    author: "Edward Tufte",
  },
  {
    quote: "프로그램은 개발자가 짜고, 보너스는 영업이 받는다.",
    author: "개발자 속담",
  },
  {
    quote: "나 자신을 믿지 말라.",
    author: "돈협지",
  },
  {
    quote: "기계는 거짓말을 하지 않는다.",
    author: "돈협지",
  },
  {
    quote: "나도 내 마음을 모르는데 너 마음을 어떻게 아냐.",
    author: "돌협지",
  },
  {
    quote: "소프트웨어를 디자인할 때는 나는 건축가이다. 유저 인터페이스를 디자인할 때는 예술가이며, 구현할 때는 장인이 된다. 하지만 테스트를 할 때는 아마 쳐죽일 놈이 될 것이다. ",
    author: "Steve McConnell (Construx Software Builders사의 CEO)",
  },
];

// 명언과 인물을 넣어줄 태그
const $quote = document.querySelector("#quote");
const $author = document.querySelector("#author");
const $refresh = document.querySelector("#btnQuRefresh");

// quotes 배열에서 랜덤하게 선택한 객체
var todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 태그 안에 랜덤하게 선택한 객체의 quote와 author을 넣어줌
$quote.innerText = todaysQuote.quote;
$author.innerText = todaysQuote.author;

$refresh.addEventListener('click', function(){
  todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  $quote.innerText = todaysQuote.quote;
  $author.innerText = todaysQuote.author;
});





// list에 명언 전체 뿌리기
// for (let i in quotes) {
//   let row = document.createElement("li");
//   let quote = document.createElement("strong");
//   let author = document.createElement("p");

//   row.className = "quoteItem";
//   quote.innerText = quotes[i]["quote"];
//   author.innerText = quotes[i]["author"];

//   row.appendChild(quote),
//   row.appendChild(author);

//   $quoteList.appendChild(row);
// }
