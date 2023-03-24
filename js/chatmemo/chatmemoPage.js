var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    fixedWeekCount: false,
});
calendar.render();

const plusIcon = document.querySelector(".chatPage_memoList_header_plusIcon");
const memoLists = document.querySelector(".chatPage_memoLists");

const MEMOGROUPS_KEY = "memoGroups";

let memoGroups = [];

const saveMemoGroups = () => {
    localStorage.setItem(MEMOGROUPS_KEY, JSON.stringify(memoGroups));
}

const handleMemoGroupMake = (title) => {
    const newMemoGroup = {
        title: title,
        id: Date.now(),
    }
    memoGroups.push(newMemoGroup);
    paintMemoGroup(newMemoGroup);
    saveMemoGroups();
}

const paintMemoGroup = (newMemoGroup) => {
    const memoList = document.createElement('div');
    memoList.id = newMemoGroup.id;
    memoList.classList.add('chatPage_memoList');
    const memoIconSpan = document.createElement('span');
    memoIconSpan.classList.add('chatPage_memoList_i');
    //icon picked randomly or can choose
    const memoIcon = document.createElement('i');
    const memoListTextBox = document.createElement('div');
    memoListTextBox.classList.add('chatPage_memoList_text');
    const memoTitle = document.createElement('h4');
    memoTitle.innerText = newMemoGroup.title;
    const memoDetail = document.createElement('span');
    memoDetail.innerText = "Detail";

    memoList.appendChild(memoIconSpan);
    memoIconSpan.appendChild(memoIcon);
    memoList.appendChild(memoListTextBox);
    memoListTextBox.appendChild(memoTitle);
    memoListTextBox.appendChild(memoDetail);

    memoLists.appendChild(memoList);
}

const handleClickPlusIcon = () => {
    const title = prompt("생성할 메모 그룹의 이름을 적어주세요", "Memo Title");
    handleMemoGroupMake(title);
}


plusIcon.addEventListener("click", handleClickPlusIcon);

const savedMemoGroups = localStorage.getItem(MEMOGROUPS_KEY);

if (savedMemoGroups) {
    memoGroups = JSON.parse(savedMemoGroups);
    console.log(memoGroups);
    JSON.parse(savedMemoGroups).forEach(paintMemoGroup);
}