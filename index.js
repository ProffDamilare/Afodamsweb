// Set the date to count down to
var countDownDate = new Date("2023-12-31T23:59:59").getTime();

// Update the countdown every second
var countdown = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 160 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("day").innerHTML = padNumber(days);
  document.getElementById("hour").innerHTML = padNumber(hours);
  document.getElementById("minute").innerHTML = padNumber(minutes);
  document.getElementById("second").innerHTML = padNumber(seconds);

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Countdown Finished";
  }
}, 1000);

// Function to pad single-digit numbers with a leading zero
function padNumber(number) {
  return (number < 10 ? "0" : "") + number;
}



