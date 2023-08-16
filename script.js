var timerId;
var audio = new Audio("Tyga.mp3");

function setAlarm() {
  var timeInput = document.getElementById("time").value;
  var timeArray = timeInput.split(":");
  var hours = parseInt(timeArray[0]);
  var minutes = parseInt(timeArray[1]);
  var seconds = parseInt(timeArray[2]);

  var currentTime = new Date();
  var alarmTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    hours,
    minutes,
    seconds
  );

  var timeDifference = alarmTime - currentTime;

  if (timeDifference <= 0) {
    alert("Bitte geben Sie eine zukünftige Zeit ein.");
    return;
  }

  var timerDisplay = document.getElementById("timer");

  timerId = setInterval(function() {
    timeDifference -= 1000;
    if (timeDifference <= 0) {
      clearInterval(timerId);
      timerDisplay.textContent = "00:00:00";
      playAlarm();
      alert("Wecker/Timer ist abgelaufen!");
    } else {
      var timeRemaining = new Date();
      timeRemaining.setTime(timeDifference);
      var hoursRemaining = timeRemaining.getUTCHours().toString().padStart(2, "0");
      var minutesRemaining = timeRemaining.getUTCMinutes().toString().padStart(2, "0");
      var secondsRemaining = timeRemaining.getUTCSeconds().toString().padStart(2, "0");
      timerDisplay.textContent = hoursRemaining + ":" + minutesRemaining + ":" + secondsRemaining;
    }
  }, 1000);
}

function stopAlarm() {
  clearInterval(timerId);
  stopMusic();
  var timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = "00:00:00";
}

function playAlarm() {
  audio.play();
}

function stopMusic() {
  audio.pause();
  audio.currentTime = 0;
}
