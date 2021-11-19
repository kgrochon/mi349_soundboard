var chaos = document.getElementById('chaos_btn')
var audio_exp = document.getElementById("explosion"); 

var special = document.getElementById('special_btn')
var audio_spec = document.getElementById("special"); 

var time = document.getElementById('time_btn')
var audio_time = document.getElementById("time"); 

var body = document.body;

var timer = "no time";

chaos.addEventListener('mouseenter', function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    chaos.style.backgroundColor = "#" + randomColor; 
});

chaos.addEventListener('click', function() {
    chaos.style.backgroundColor = "rgb(253, 189, 69)";
    if(audio_exp.paused) {audio_exp.currentTime=0;audio_exp.play()}
                   else  audio_exp.pause();
});

special.addEventListener('click', function() {
    if(audio_spec.paused) {audio_spec.currentTime=0;audio_spec.play()}
                   else  audio_spec.pause();

    if (body.classList.contains('cone')) {
        body.classList.remove('cone');

    } else {
        body.classList.add('cone');
    }
});

time.addEventListener('click', function() {
    if(audio_time.paused) {audio_time.currentTime=0;audio_time.play()}
                   else  audio_time.pause();

    if (timer == "no time") {
        var date = new Date();

        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        document.getElementById('display_time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function() {
        startTime()
        }, 500);
        timer = "time";
    } else {
        document.getElementById('display_time').innerHTML = "";
        timer = "no time";
    }
});

