function formatTime(time){
    let day = 1440;
    let hour = 60;
    let minute = 1;
    while(time > 0){
        if(time > 1440){
            let days = Math.floor(time / day);
            time = time - (days*day)
        }else if(time > 60){
            let hours = Math.floor(time / hour);
            time = time - (hours*hour)
        }else if(time<60){
            let minutes = Math.floor(time / minute);
            time = time - (minutes*minute)
        }else {
            break;
        }
    }
    return (this.days + ' day(s) ' + this.hours + ' hour(s) ' + this.minutes + ' minute(s).');
}
formatTime(3601);