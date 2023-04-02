function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
};

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

let d = new Date();

document.querySelector(".year").textContent = d.getFullYear();

document.querySelector(".update").textContent = document.lastModified;