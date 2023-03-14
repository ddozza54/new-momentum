const memoList = document.querySelector(".memo-list");
const replyForm = document.querySelector(".reply_form");
const replyInput = replyForm.querySelector(".reply_input");

const MEMOES_KEY = "chatMemos";

let chatMemoes = [];

function saveNewMemo() {
    localStorage.setItem(MEMOES_KEY, JSON.stringify(chatMemoes))
}


function onDeleteBtnClick(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
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

    checkboxAndSpan.appendChild(marked);
    checkboxAndSpan.appendChild(newMemoSpan);
    li.append(checkboxAndSpan);
    li.appendChild(button);

    memoList.appendChild(li);

    marked.addEventListener("change", onCheckedBoxClick)
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
    chatMemoes.push(newMemoObj);
    paintNewMemo(newMemoObj);
    saveNewMemo();
}

replyForm.addEventListener("submit", onChatMemoSubmit);
