        
function guess() {
var gussNum = prompt("Enter number between 1 to 5 :");
var randomNum = Math.floor(Math.random() * 5) + 1;
var demo = document.getElementsByClassName('demo')[0];
if (gussNum == randomNum ) {
    demo.innerHTML = "Congratulation: You have won";
    demo.style.color = "blue";
                
} else {
    demo.innerHTML = "Sorry: You have lost.Random number was = " + randomNum;
     demo.style.color = "red";
                
}
}
// *--------------Javascript Slider-----------------*
   
var photos = ["./images/img-1.JPG","./images/img-2.JPG","./images/img-3.JPG"];
var imgTag = document.querySelector("img");

var count = 0;
function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
   
}
function previous() {
    count--;
    if (count < 0 ){
        count = photos.length - 1;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}

// *-------------Javascript Calculator------------------*
var inputElement = document.getElementById('answer');

function calculator(newValue) {
    inputElement.value += newValue;
}

function deleteMe(){
    inputElement.value = "";
}
function answer() {
    var a = inputElement.value;
    var b = eval(a);
    inputElement.value = b;
}
// *-------------Javascript Calender------------------*

// var monthName = "june";
// var startingDay = 4;
// var days = 30;
// var fullDays = 'Sun  Mon    Tue    Wed    Thu    Fri    sat';
// var getDays = document.getElementsByClassName('days')[0];
//  getDays.innerHTML = fullDays;
//  var cdays = document.getElementsByClassName('cdays')[0];
// for (let i = 0; i < 5; i++) {
//      var dayRow = " ";
//     for (let j = 1; j <= 7; j++) {
    
//      var currentDay = 7*i + j - startingDay;
//      dayRow += currentDay;
    
//    }
//     console.log(dayRow)
//     console.log(cdays)
//     cdays.innerHTML = dayRow;
//     console.log(cdays)
// }

// *-------------Digital clock------------------*
function getDate() {
   var myDate = new Date();
   var hr,min = myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
   var sec =  myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();
   var period = myDate.getHours() >= 12 ? "PM" : "AM";

   if (myDate.getHours() == 0) {
     hr = 12;
   } else if (myDate.getHours() > 12 ) {
    hr = myDate.getHours() -12;
   } else {
    hr = myDate.getHours();
   }
   var currentTime = hr + ':' + min + ':' + sec + '  ' + period;
   document.getElementsByClassName('hour')[0].innerHTML = currentTime;
//    document.getElementsByClassName('periods')[0].innerHTML = period;
 var myDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 var myMonth = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
 var day = myDate.getDate();
 var currDay = myDay[myDate.getDay()] + ',' + myMonth[myDate.getMonth()] + "  " + day;
 document.getElementsByClassName('dates')[0].innerHTML = currDay;


}
getDate();
setInterval(() => {
    getDate(); 
}, 1000);

// *-------------slide show------------------*

const slideElements = document.querySelectorAll(".single_element");
console.log(slideElements);
var slideCount = 1;
setInterval(() => {
    slideCount++;
    var currentElement = document.getElementsByClassName('current')[0];
    currentElement.classList.remove('current');
    if (slideCount > slideElements.length) {
        slideElements[0].classList.add('current');
        slideCount = 1;
       } else {
        currentElement.nextElementSibling.classList.add('current');
    } 
}, 1000);


// *-------------footer------------------*

const footerElements = document.querySelectorAll(".footer_elements");
console.log(footerElements)
var countElements = 1;
setInterval(() => {
    countElements++;
    var footerCurrent = document.getElementsByClassName('f-current')[0];
    footerCurrent.classList.remove('f-current');
    if (countElements > footerElements.length) {
        footerElements[0].classList.add('f-current');
        countElements = 1;
       } else {
        footerCurrent.nextElementSibling.classList.add('f-current');
    }
    
}, 1000)


