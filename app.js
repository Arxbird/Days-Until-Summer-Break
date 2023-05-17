function getTimeDifference(date) {
    const futureDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = futureDate - currentDate;
  
    if (timeDifference <= 0) {
      return "Summer break!";
    }
  
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    if (daysLeft > 1) {
      return `${daysLeft} days left`;
    } else {
      return `${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds left`;
    }
  }
  
  
  function updateDaysLeft() {
    const summerBreakDate = new Date(1686175200 * 1000);
    const timezoneOffset = summerBreakDate.getTimezoneOffset() * 60 * 1000;
    const localSummerBreakDate = new Date(summerBreakDate.getTime() + timezoneOffset);
    const daysLeftElement = document.getElementById("daysLeft");
    const text = getTimeDifference(localSummerBreakDate);
    daysLeftElement.innerHTML = text;
  
    window.requestAnimationFrame(updateDaysLeft);
  }
  
  window.onload = function() {
    updateDaysLeft();
  };
  