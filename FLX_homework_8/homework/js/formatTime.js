function formatTime(time){
    var day = 1440;
    var hour = 60;
    var minute = 1;
    while(time > 0){
        if(time > 1440){
            var days = Math.floor(time / day);
            time = time - (days*day)
        }else if(time > 60){
            var hours = Math.floor(time / hour);
            time = time - (hours*hour)
        }else if(time<60){
            var minutes = Math.floor(time / minute);
            time = time - (minutes*minute)
        }else {
            break;
        }
    }
    return (days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).');
}
formatTime(3601);