'use strict';

import { onEvent, select, selectById, selectAll, create, print } from './utility.js';

function clockChange() {
    let now = new Date();
    let daysOfTheWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"                       
    ];

    let months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August", 
        "September", "October", "November", "December"
    ];

    let dayOfTheWeek = now.getDay();
    let hours = now.getHours(); 
    let currentDateOfMonth = now.getDate();
    let year = now.getFullYear();
    let minutes = now.getMinutes().toString().padStart(2, '0'); 
    let seconds = now.getSeconds().toString().padStart(2, '0'); 
    let ampm = hours >= 12 ? 'PM' : 'AM';
    let weekDay = daysOfTheWeek[now.getDay()];
    let currentMonth = months[now.getMonth()];
    if (hours > 12){
        hours -= 12;
    }
    hours = hours.toString().padStart(2, '0');
    let showHours = selectById('hours');
    let showMins = selectById('minutes');
    let showSecs = selectById('seconds');
    let showAMPM = selectById('ampm');
    let showWeekDay = selectById('weekDay');
    let showMonth = selectById('month');
    let showMonthDate = selectById('month-date');
    let showYear = selectById('full-year');
    showHours.innerText = hours;
    showMins.innerText = minutes;
    showSecs.innerText = seconds;
    showAMPM.innerText = ampm;
    showWeekDay.innerText = `${weekDay},`;
    showMonth.innerText = `${currentMonth},`;
    showMonthDate.innerText = `${currentDateOfMonth},`;
    showYear.innerText = year;
}

clockChange();

setInterval(clockChange, 1000);