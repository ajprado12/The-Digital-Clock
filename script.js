
function Month (month){
    if (month==0){
        return "January"
    }
    else if (month==1){
        return "February"
    }
    else if (month==2){
        return "March"
    }
    else if (month==3){
        return "April"
    }
    else if (month==4){
        return "May"
    }
    else if (month==5){
        return "June"
    }
    else if (month==6){
        return "July"
    }
    else if (month==7){
        return "August"
    }
    else if (month==8){
        return "September"
    }
    else if (month==9){
        return "October"
    }
    else if (month==10){
        return "November"
    }
    else if(month==11){
        return "December"
    }
}

function Day (day){
    if (day==0){
        return "Sunday"
    }
    if (day==1){
        return "Monday"
    }
    if (day==2){
        return "Tuesday"
    }
    if (day==3){
        return "Wednesday"
    }
    if (day==4){
        return "Thursday"
    }
    if (day==5){
        return "Friday"
    }
    if (day==6){
        return "Saturday"
    }
}

function newHour (hour) {
    if (hour > 12) {
        return hour - 12;
    } else if (hour == 00) {
        return hour + 12;
    } return hour;
}

function ampm (hour) {
    if (hour < 12) {
        return "AM"
    } else {
        return "PM"
    }
}

function time () {
    var today = new Date;
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var tod = ampm(hour);
    var Hour = newHour(hour);

    if (Hour < 10) {
        Hour = "0" + Hour;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    
    var currentTime = Hour + ":" + minutes + ":" + seconds + " " + tod;
    document.getElementById("Clock").innerHTML=currentTime;  
    
    var day = today.getDay();
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    
    var newMonth = Month(month);
    
    var newDay = Day(day);
        
    var now = newDay +", " + newMonth +" "+ date +" "+ year;
    document.getElementById("Date").innerHTML=now;

}


setInterval(time, 1000);
