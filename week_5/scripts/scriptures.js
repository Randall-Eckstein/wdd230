const input = document.getElementById("favchap");
const button = document.querySelector("Button");
const list = document.getElementById("list");

button.addEventListener("click", function() {
    if (input.value != ""){

        const li = document.createElement("li");
        li.innerHTML = input.value;
        const delButton = document.createElement("button");
        delButton.innerHTML = "X";
        li.appendChild(delButton);
        list.appendChild(li);

        delButton.addEventListener("click", function(){
            li.remove();
        })
        input.focus();
        input.value = "";
        input.setAttribute("placeholder", "")
    }
});