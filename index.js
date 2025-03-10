'use strict';
//handle Enter key pressed
function enterKeyPressed(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        timeConversion();
    }
}

function timeConversion() {
    document.getElementById("result").innerHTML = ""; //clear previous attempt
    //check if there is an input
    const initTime = document.getElementById("time").value.trim();
    if (initTime != "") {    
        console.log("DATA INITIATED");
    } else { 
        document.getElementById("result").innerHTML = "Where's your time?";
        return console.log("NULL");
    }

    //define var
    let timeArr = initTime.split(":");
    console.log(timeArr);
    let len = timeArr.length;

    //func
    function containWordCharacters(timeArr) {
        const wordCheckRegex = /[^0-9]/gi;
        return timeArr.some(element => wordCheckRegex.test(element));
    } 

    //check if the time input has any extra value such as miliseconds and word/expression characters  
    if (len < 3 || len > 3) {
        console.log("DATA ERROR");
        return document.getElementById("result").innerHTML = "Your time is unvalid";
    } else if (containWordCharacters(timeArr) == true) {
        console.log("Time contains word/expression characters");
        return document.getElementById("result").innerHTML = "Your time is unvalid";
    } else {console.log("time is valid [1]");}
    
    //If the time is actually valid, EX. not 19:99:99
    for (let i = 0; i < len; i++) {
        //check hours 
        if (i == 0) {
            if (timeArr[i] > 24) {
                console.log("Invalid numbers of hours");
                return document.getElementById("result").innerHTML = "Invalid numbers of hours";
            } else if (timeArr[i] > 12) {
                console.log("time is not in 12-hours format");
                return document.getElementById("result").innerHTML = "Time is not in 12 hours format";
            }
        } else if (timeArr[i] >= 60) { //check minutes/seconds
                console.log("Can't have no more than 60 minutes/seconds");
                return document.getElementById("result").innerHTML = "Time can't have no more than 60 minutes/seconds";
        } else {console.log("time is valid [2]");}
    }

    //conversion
    let timeFormat = document.getElementById("AM/PM").value;
    let time = {
        hr: timeArr[0],
        min: timeArr[1],
        sec: timeArr[2],
        timeFormat,
    }

    if (timeFormat === "AM") {
        if (time.hr == "12") {
            time.hr = "00";
        }
    } else if (timeFormat === "PM") {
        if (time.hr != "12") {
            time.hr = parseInt(time.hr) + 12;
        }
    }
    //return result
    console.log(time.hr + ":" + time.min + ":" + time.sec + " - SUCCESS");
    return document.getElementById("result").innerHTML = time.hr + ":" + time.min + ":" + time.sec;
}



