var i = 0;
var txt = 'GOODNIGHT, ASSHOLES!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("goodnight").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var interval = setInterval(timestamphome, 1000);




 function timestamphome(){
 var date;
date = new Date();


 var time = document.getElementById('timediv');
 time.innerHTML = date.toLocaleTimeString();


  }
