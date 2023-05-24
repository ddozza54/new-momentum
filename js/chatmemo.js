'use strict'
const memoList = document.querySelector(".memo-list");
const memoList_div = document.querySelector(".memoList");
const replyForm = document.querySelector(".reply_form");
const replyInput = replyForm.querySelector(".reply_input");

const MEMOS_KEY = "chatMemos";

let chatMemos = [];

function saveNewMemo() {
    localStorage.setItem(MEMOS_KEY, JSON.stringify(chatMemos))
}


function onDeleteBtnClick(event) {
    const li = event.target.parentElement;
    li.remove();
    chatMemos = chatMemos.filter((memo) => memo.id !== parseInt(li.id));
    saveNewMemo();
}

const onCheckedBoxClick = (event) => {
    const span = event.target.nextElementSibling;
    if (!span.style.textDecoration || span.style.textDecoration === "blink") {
        span.style.textDecoration = "line-through"
    } else {
        span.style.textDecoration = "blink";
    }


}

function paintNewMemo(newMemoObj) {
    const li = document.createElement("li");
    li.id = newMemoObj.id;
    const checkboxAndSpan = document.createElement("div");
    checkboxAndSpan.classList.add("checkboxAndSpan");
    const newMemoSpan = document.createElement("span");
    newMemoSpan.innerText = newMemoObj.text;
    newMemoSpan.classList.add("memoList_span");
    const marked = document.createElement("input");
    marked.type = "checkbox";
    const button = document.createElement("button");
    button.innerText = "❌";

    button.addEventListener("click", onDeleteBtnClick);
    marked.addEventListener("change", onCheckedBoxClick);

    checkboxAndSpan.appendChild(marked);
    checkboxAndSpan.appendChild(newMemoSpan);
    li.append(checkboxAndSpan);
    li.appendChild(button);
    memoList.appendChild(li);
    memoList_div.scrollTop = memoList_div.scrollHeight;

}


function onChatMemoSubmit(event) {
    event.preventDefault();
    if (replyInput.value.trim() !== "") {
        const newMemoText = replyInput.value;
        const newMemoObj = {
            text: newMemoText,
            id: Date.now(),
        }
        chatMemos.push(newMemoObj);
        paintNewMemo(newMemoObj);
        saveNewMemo();

    }
    replyInput.value = "";
}

replyForm.addEventListener("submit", onChatMemoSubmit);


const savedMemos = localStorage.getItem(MEMOS_KEY);

if (savedMemos) {
    const parsedMemos = JSON.parse(savedMemos);
    chatMemos = parsedMemos;
    parsedMemos.forEach(paintNewMemo);
}