
// Join Page unique actions
const joinDate = document.getElementById("date");
const joinTime = document.getElementById("time");

joinDate.value = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
joinTime.value = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
