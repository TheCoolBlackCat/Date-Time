//FUNCTIONAL CODE
//Do not post code here that is not fully tested!

//START init
function theCall(){
	tlochms();
	ddtmofy();
	
}
setInterval(theCall, 1000); //Calls everything every 1 sec (could be a problem when code expands due to reduced efficency)
theCall();  //Intital Call
//END init

//START Full Time
function tlochms() {
    var d = new Date();
    document.getElementById("t-loc-h:m:s").innerHTML=d.toLocaleTimeString();
}
//END Full Time

//START Date Day_TextMOnth_FullYear
function ddtmofy() {
var date = new Date();  //Gets Date

var day = date.getDate();   //Gets Day
var d = String(day);    //Converts 'day' to String

var month = date.getMonth();    //Gets Month (Number from 0-11)

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];     //Array of Month Names

var mo = monthNames[month];  //Fetches current month from array

var y = date.getFullYear(); //Gets Year

var finaleDate= d + " " + mo + " " + y; //Writes full date

document.getElementById("d-d_tmo_fy").innerHTML = finaleDate;  //Prints date in id="date"
}
//END Date Day_TextMOnth_FullYear


//TESTS
//Everything below this comment is in development/testing - always commit with /* */ around it

//Date w/th START --> STILL TESTING, SO COMMENTED OUT
/*
setInterval(whatDate, 1000);
function whatDate() {
var date = new Date();  //Gets Date

var day = date.getDate();   //Gets Day
var d = String(day);    //Converts 'day' to String

var th = "<sup>th</sup>";


		 if (d=1)     //IF day is 1st
   			{th = "<sup>st</sup>";}
else if (d=21)     //IF day is 21st
    		{th = "<sup>st</sup>";}
else if (d=31)    //IF day is 31st
    		{th = "<sup>st</sup>";}

else if (d=2)		//IF day is 2nd
    {th = "<sup>nd</sup>";}
else if (d=22)	//IF day is 22nd
    {th = "<sup>nd</sup>";}

else if (d=3)		//IF day is 3rd
    {th = "<sup>rd</sup>";}
else if (d=23)		//IF day is 23rd
    {th = "<sup>rd</sup>";}
else {th = "<sup>th</sup>"}




var month = date.getMonth();    //Gets Month (Number from 0-11)

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];     //Array of Month Names

var mo = monthNames[month];  //Fetches current month from array

var y = date.getFullYear(); //Gets Year

finaleDate= d + th + " " + mo + " " + y; //Writes full date

document.getElementById("d-ds_tmo_fy").innerHTML = finaleDate;  //Prints date in id="date"
}
whatDate(); //Intital Call
//Date w/th END
*/














/* MISC

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
