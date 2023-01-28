let date = new Date();
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

