//Time 











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
//update real time
function time () {
    //This sets both Date & Time
    var today = new Date;

    
    
    // We need to set time HH:MM:SS
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    
    var currentTime = hour + ":" + minutes + ":" + seconds;
    document.getElementById("Clock").innerHTML=currentTime;    

    
    
    // We need to set date Day,Month Day year
    var day = today.getDay(); //gets the day of the week
    var year = today.getFullYear(); //gets the year as a number
    var month = today.getMonth(); //gets the month as a number
    var date = today.getDate(); //gets the date as a number
    
    //we need to convert numbers to strings for month
    var newMonth = Month(month);
    
    //strings for day
    var newDay = Day(day);
    
    
    
    var now = newDay +" " +newMonth +" "+ date +" "+ year;
    document.getElementById("Date").innerHTML=now;

  

}


setInterval(time, 1000);
