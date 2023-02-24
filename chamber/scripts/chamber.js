let date = new Date();

// for testing purposes: uncomment and select day of the month to test banner:
// date = new Date(2023, 1, 7);

document.querySelector(".year").textContent = date.getFullYear();
document.querySelector(".update").textContent = document.lastModified;
const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
document.getElementById("currentDate").innerHTML = fullDate;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

const banner = document.querySelector(".banner");
if (date.getDay() == 2 || date.getDay() == 3){
    banner.style.display = "block";
}
else {
    banner.style.display = "none";
}


let lastVisit = Number(window.localStorage.getItem("visits-ls"));



const numberOfVisits = document.querySelector("#numVisits");

if (lastVisit !== 0) {
    numberOfVisits.textContent = lastVisit;
}
else {
    numberOfVisits.textContent = "This is your first visit!"
}

lastVisit++;

localStorage.setItem("visits-ls", lastVisit);

const joinDate = document.getElementById("date");
const joinTime = document.getElementById("time");

joinDate.value = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
joinTime.value = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

function showDateTime() {
    console.log(joinDate.value);
    console.log(joinTime.value);
}

const testDateTimeButton = document.querySelector(".testDate");
testDateTimeButton.onclick = showDateTime;