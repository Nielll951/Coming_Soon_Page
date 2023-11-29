// it will store counting down date and time
let countDownDate = new Date("Dec 29, 2023 00:00:00").getTime()
// 
let x = setInterval(function(){
   let now = new Date().getTime() // it will store current date and time
   // get the distance
   let distance = countDownDate - now

   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

   if (distance < 0) {
      clearInterval(x)
      document.getElementById("days").innerHTML = '00';
      document.getElementById("hours").innerHTML = '00';
      document.getElementById("minutes").innerHTML = '00';
      document.getElementById("seconds").innerHTML = '00';
   }

},1000)