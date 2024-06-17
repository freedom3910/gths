document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let events = {};

    function generateCalendar(month, year) {
        calendar.innerHTML = '';

        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        monthDiv.innerHTML = `
            <button onclick="prevMonth()">&lt;</button>
            <h2>${monthNames[month]} ${year}</h2>
            <button onclick="nextMonth()">&gt;</button>
        `;
        calendar.appendChild(monthDiv);

        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const weekDiv = document.createElement('div');
        weekDiv.className = 'week';
        weekDays.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.textContent = day;
            weekDiv.appendChild(dayDiv);
        });
        calendar.appendChild(weekDiv);

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = monthDays[month] + (month === 1 && isLeapYear(year) ? 1 : 0);

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const weekDiv = document.createElement('div');
            weekDiv.className = 'week';

            for (let j = 0; j < 7; j++) {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'day';

                if (i === 0 && j < firstDay) {
                    dayDiv.textContent = '';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    dayDiv.textContent = date;
                    if (events[`${year}-${month + 1}-${date}`]) {
                        dayDiv.classList.add('run');
                    }
                    dayDiv.addEventListener('click', () => openEventModal(date, month, year));
                    date++;
                }
                weekDiv.appendChild(dayDiv);
            }

            calendar.appendChild(weekDiv);

            if (date > daysInMonth) {
                break;
            }
        }
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    window.prevMonth = function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    }

    window.nextMonth = function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    }

    function openEventModal(date, month, year) {
        const modal = document.getElementById('eventModal');
        const span = document.getElementsByClassName('close')[0];
        const selectedDate = document.getElementById('selectedDate');
        const eventDetails = document.getElementById('eventDetails');
        const saveEvent = document.getElementById('saveEvent');
        
        const key = `${year}-${month + 1}-${date}`;
        selectedDate.textContent = `${year}-${month + 1}-${date}`;
        eventDetails.value = events[key] || '';

        modal.style.display = 'block';

        span.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        saveEvent.onclick = function() {
            const details = event
