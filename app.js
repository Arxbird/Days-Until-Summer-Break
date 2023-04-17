function daysLeftToString(daysDiff) {
    return Math.floor(daysDiff) + " Days Left"
}

function getDaysLeft() {
    var currentDate = new Date().getTime();
    var summerBreakDate = new Date("06/09/2023");

    var timeDiff = summerBreakDate - currentDate;
    var daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    return daysLeftToString(daysDiff)
}

window.onload = function() {
    var daysLeft = document.getElementById("daysLeft");
    var text = getDaysLeft()
    daysLeft.innerHTML = text
}