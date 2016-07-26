//Full Time START
setInterval(tlochms, 1000);

function tlochms() {
    var d = new Date();
    document.getElementById("t-loc-h:m:s").innerHTML=d.toLocaleTimeString();
}
tlochms(); //Intital Call

//Full Time END




//Date Day_TextMOnth_FullYear END
setInterval(whatDate, 1000);
function whatDate() {
var date = new Date();  //Gets Date

var day = date.getDate();   //Gets Day
var d = String(day);    //Converts 'day' to String

var month = date.getMonth();    //Gets Month (Number from 0-11)

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];     //Array of Month Names

var mo = monthNames[month];  //Fetches current month from array

var y = date.getFullYear(); //Gets Year

finaleDate= d + " " + mo + " " + y; //Writes full date

document.getElementById("d-d_tmo_fy").innerHTML = finaleDate;  //Prints date in id="date"
}
whatDate(); //Intital Call
//Date Day_TextMOnth_FullYear END





/*

setInterval(updateTime, 1000);
function updateTime() {
var sec = date.getSeconds();
var min = date.getMinutes();
var hr = date.getHours();

var s = String(sec);

if (hr<10) {    //IF Hour is 0-9, prefix a zero
    var h = String("0" + hr)
}   else { 
    var h = String(hr);
}

if (min<10) {    //IF Hour is 0-9, prefix a zero
    var mi = String("0" + min)
}   else { 
    var mi = String(min);
}

document.getElementById("demo").innerHTML =h + ":" + mi + ":" + s;  //Prints time in id="time"
}


var timeArray = [date.getSeconds(),date.getMinutes(),date.getHours()]

*/
