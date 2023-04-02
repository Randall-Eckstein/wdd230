const fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

const fruitCards = document.getElementById("fruit-cards");

let fruitData = [];

async function getFruitData() {
    const response = await fetch(fruitURL);
    const data = await response.json();
    fruitData = data;
    console.log(fruitData[0]);
    appendFruits(data);
}

getFruitData();

function appendFruits(fruits) {
    for ( i = 1; i < 4; i++ ){
        let tempName = `fruit${i}`;
        const fruitLabel = document.createElement("label");
        fruitLabel.setAttribute("for", "fruit" + i);
        fruitLabel.setAttribute("class", "sbs");
        fruitLabel.innerText = `Fruit${i}: `;
        const selector = document.createElement("select");
        selector.setAttribute("name", tempName);
        selector.setAttribute("id", tempName);
        fruits.forEach((fruit) => {
            const fruitName = document.createElement("option");
            fruitName.setAttribute("value", fruit.name);
            fruitName.innerText = fruit.name;
            selector.appendChild(fruitName);
        });
        fruitLabel.appendChild(selector);
        fruitCards.appendChild(fruitLabel);
    }
}

const submitButton = document.querySelector(".submit-drink");
const result = document.getElementById("result");

submitButton.addEventListener("click", createDrink);

function createDrink() {
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let instruct = document.getElementById("instructions").value;
    let fruitOne = document.getElementById("fruit1").selectedIndex;
    let fruitTwo = document.getElementById("fruit2").selectedIndex;
    let fruitThree = document.getElementById("fruit3").selectedIndex;

    let carbs = fruitData[fruitOne].nutritions.carbohydrates + fruitData[fruitTwo].nutritions.carbohydrates + fruitData[fruitThree].nutritions.carbohydrates;
    let protein = fruitData[fruitOne].nutritions.protein + fruitData[fruitTwo].nutritions.protein + fruitData[fruitThree].nutritions.protein;
    let sugar = fruitData[fruitOne].nutritions.sugar + fruitData[fruitTwo].nutritions.sugar + fruitData[fruitThree].nutritions.sugar;
    let calories = fruitData[fruitOne].nutritions.calories + fruitData[fruitTwo].nutritions.calories + fruitData[fruitThree].nutritions.calories;


//      the input values of the order (7 inputs = first name, email, phone, 
//      three selected fruits, and special instructions),
//      the order date, and the total amount of carbohydrates, protein, 
//      fat, sugar, and calories based upon the three fruit choices 
//      selected on the form.


    result.innerHTML = `Name: ${fname}, email: ${email}, phone: ${phone}, instructions: ${instruct}\n\n${fruitData[fruitOne].name}, ${fruitData[fruitTwo].name}, ${fruitData[fruitThree].name}\n\nThis drink has:\n\t${carbs.toFixed(2)} g carbohydrates\n\t${protein.toFixed(2)} g protein\n\t${sugar.toFixed(2)} g sugar\n\t${calories.toFixed(0)} calories.`;

    let drinksMade = Number(window.localStorage.getItem("drinks"));
    drinksMade += 1;
    localStorage.setItem("drinks", drinksMade);
};