var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    fixedWeekCount: false,
});
calendar.render();

const plusIcon = document.querySelector(".chatPage_memoList_header_plusIcon");

const handleClickPlusIcon = () => {
    alert('clicked!');
}


plusIcon.addEventListener("click", handleClickPlusIcon)