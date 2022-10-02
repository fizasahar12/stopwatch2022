
var setBtn = document.getElementById("set");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");


var Msec = 0;
var Sec = 0;
var Min = 0;

var msec = document.getElementById("msec");
var sec = document.getElementById("sec");
var minute = document.getElementById("min");
var heading = document.querySelector('h2');

var interval;

function setTime() {
        msec.innerHTML = Msec++;
        if(Msec == 60){
            Msec = 0;
            Sec = Sec + 1;
            sec.innerHTML = Sec;
                heading.innerHTML = `it's ${Sec} seconds`;  
                heading.classList.add('invisible'); 
        }
        if(Sec == 6){
            Sec = 0;
            Min = Min + 1;
            minute.innerHTML = Min;
            heading.innerHTML = `it's ${Min} minutes and ${Sec} seconds`;  
            heading.classList.add('invisible');        
        }
       
}

function Start(){
    interval = setInterval(setTime,30);
    setBtn.disabled = true;
}

stopBtn.addEventListener('click', function(){
    clearInterval(interval);
    setBtn.disabled = false;
});

function reset(){
 Msec = 0;
 Min = 0;
 Sec = 0;
 msec.innerHTML = "0";
 sec.innerHTML = "0";
 minute.innerHTML = "0";
 clearInterval(interval);
 setBtn.disabled = false;
}

