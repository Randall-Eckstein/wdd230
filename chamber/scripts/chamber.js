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