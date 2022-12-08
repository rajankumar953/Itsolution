let counts = setInterval(updated);
let upto = 0;
function updated() {
    var count = document.getElementById("users");
    count.innerHTML = ++upto;
    if (upto === 2700) {
        clearInterval(counts);
    }
}
let counts1 = setInterval(updated1);
let upto1 = 0;
function updated1() {
    var count1 = document.getElementById("subscribes");
    count1.innerHTML = ++upto1;
    if (upto1 === 1800) {
        clearInterval(counts1);
    }
}
let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2() {
    var count2 = document.getElementById("downloads");
    count2.innerHTML = ++upto2;
    if (upto2 === 35) {
        clearInterval(counts2);
    }
}
let counts3 = setInterval(updated3);
let upto3 = 0;
function updated3() {
    var count3 = document.getElementById("products");
    count3.innerHTML = ++upto3;
    if (upto3 === 4) {
        clearInterval(counts3);
    }
}
// for submit button at the bottom 
function mySubscribe() {
    var userPreference;

    if (confirm("Do you want to Subscribe") == true) {
        userPreference = "Data saved successfully!";
        alert('Subscribed Successfully');
    } else {
        userPreference = "Save Canceled!";
    }

    document.getElementById("emailid").innerHTML = userPreference;
}
function myFeedback() {
    var userPreference;

    if (confirm("Do you want to submit") == true) {
        userPreference = "Data saved successfully!";
        alert('Successfully submitted');
    } else {
        userPreference = "Save Canceled!";
    }

    document.getElementById("subscribe").innerHTML = userPreference;
}
function myNewsletter(){
    var userPreference;
    
    if (confirm("Do you want to Subscribe") == true) {
        userPreference = "Data saved successfully!";
        alert('Subscribed successfully');
    } else {
        userPreference = "Save Canceled!";
    }
    
    document.getElementById("subscribe").innerHTML = userPreference;
}
function myhome(){
    document.getElementById("hm");
    window.location.reload(true);
}
// function myAbout(){
//     document.getElementById("ab");
//     var link=document.createTextNode("onclick="myhome()
//     a.href = "About us\index.html";
// }