const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

//Function to get data from the computer,
// were using date constructor

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  // An IF function to change AM  to PM when needed

  if (h > 12) {
    // IF HOUR IS > 12
    h = h - 12; // i.e hour-12 ... 13-12 = 1pm e.t.c
    ampm = "PM"; // we change the ampm to "PM"
  }

  // creating a conditional statement that puts a zero before the times if the time is before 10
  // i.e 08,09, e.t.c

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Using the inner text method to change the time'from 00 to the function we have used above

  hourE1.innerText = h;
  minuteE1.innerText = m;
  secondsE1.innerText = s;
  ampmE1.innerText = ampm;

  // Were using set time out fumction to set the clock to call the function every one second, so that it keeps recording
  // so as to create an infinite loop

  setTimeout(() => {
    updateClock();
  }, 1000);
}

// call the function for it to update time

updateClock();
