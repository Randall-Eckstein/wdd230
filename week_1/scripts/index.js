let d = new Date();

document.querySelector(".year").textContent = d.getFullYear();

// let lastModif = new Date(document.lastModified);
document.querySelector(".update").textContent = document.lastModified;