const quotes = [
    {
        text: "Sometimes the smallest things take up the most room in our hearts.",
        author: "Pooh",
    },
    {
        text: "살아있다는 건 누구에게나 미래가 있다는 것. 뒤돌아 보면, 바로 거기에 미래가 있단다.",
        author: "영화 '코쿠리코 언덕에서'",
    },
    {
        text: "가까이 있는 것은 작게 멀리 있는 것은 크게 보이는 법이지",
        author: "영화 '귀를 귀울이면'"
    },
    {
        text: "자기 안의 원석을 찾아내서 오랜 시간 다듬어 가는 거란다. 시간이 많이 드는 일이지. ",
        author: "영화 '귀를 귀울이면'",
    },
    {
        text: "Life is a journey to be experienced, not a problem to be solved",
        author: "Pooh"
    },
    {
        text: "There's always a way to turn things around to find fun.",
        author: "영화 '인사이드아웃'",
    },
    {
        text: "Our fate lives within us, you only have to be brave enough to see it.",
        author: "영화 '메리다와 마법의 숲'",
    },
    {
        text: "The very things that hold you down are going to lift you up.",
        author: "영화 '덤보'",
    },
    {
        text: "노력한다고 항상 성공하진 않지만,  성공한 사람들은 노력했단 걸 기억해줘.",
        author: "곰돌이푸"
    },
];


const text = document.querySelector(".quote_text");
const author = document.querySelector(".quote_author");
const randomNumber = Math.floor(Math.random() * quotes.length);


text.innerText = quotes[randomNumber].text;
author.innerText = quotes[randomNumber].author;