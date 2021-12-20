
function getPhotos(images) {
    let bg = document.querySelector("body");
    bg.style.backgroundImage = 'url("' + images[0].src.original + '")';
    console.log(images[0].src.original);
}

fetch("https://api.pexels.com/v1/search?query=academia",{
   headers: {
     Authorization: "563492ad6f9170000100000176d86d1a24b44141b1771090ff5ddeea"
   }
}).then(resp => {
    return resp.json()
}).then(data => {
    getPhotos(data.photos);
})


var today = new Date();
let phsem2 = new Date("2022, 1, 6"); // 6 ian
var diffMs = (phsem2 - today); // milliseconds between now & phsem2
var diffDays = Math.floor(diffMs / 86400000); // days
var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes");

let _phsem = document.getElementById('phsemtime');
_phsem.textContent = "In " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes.";

let phd1 = new Date("2022, 1, 10"); // 10 ian
var diffMsphd1 = (phd1 - today); // milliseconds between now & phsem2
var diffDaysphd1 = Math.floor(diffMsphd1 / 86400000); // days
var diffHrsphd1 = Math.floor((diffMsphd1 % 86400000) / 3600000); // hours
var diffMinsphd1 = Math.round(((diffMsphd1 % 86400000) % 3600000) / 60000); // minutes
console.log(diffDaysphd1 + " days, " + diffHrsphd1 + " hours, " + diffMinsphd1 + " minutes");

let _phd1 = document.getElementById('phd1time');
_phd1.textContent = "In " + diffDaysphd1 + " days, " + diffHrsphd1 + " hours, " + diffMinsphd1 + " minutes.";


