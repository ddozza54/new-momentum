const memoList = document.querySelector(".memo-list");
const replyForm = document.querySelector(".reply_form");
const replyInput = replyForm.querySelector(".reply_input");

const MEMOES_KEY = "memos";

let memoes = [];

function saveNewMemo() {
    localStorage.setItem(MEMOES_KEY, JSON.stringify(memoes))
}

function onDeleteBtnClick(event) {
    if (li.id = event.id) {
        localStorage.removeItem()
    }
}

function paintNewMemo(newMemoObj) {
    const li = document.createElement("li");
    li.id = newMemoObj.id;
    const newMemoSpan = document.createElement("span");
    newMemoSpan.innerText = newMemoObj.text;
    li.appendChild(newMemoSpan);
    const button = document.createElement("button");
    button.innerText = "✨";
    const marked = document.createElement("input");
    marked.type = "checkbox";
    li.appendChild(button);
    li.appendChild(marked);
    memoList.appendChild(li);
    button.addEventListener("click", onDeleteBtnClick);
}


function onChatMemoSubmit(event) {
    event.preventDefault();
    const newMemoText = replyInput.value;
    replyInput.value = "";
    const newMemoObj = {
        text: newMemoText,
        id: Date.now(),
    }
    memoes.push(newMemoObj);
    paintNewMemo(newMemoObj);
    saveNewMemo();
}

replyForm.addEventListener("submit", onChatMemoSubmit);
