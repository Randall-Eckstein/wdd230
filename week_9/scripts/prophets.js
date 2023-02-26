const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();


const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards");

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let portrait = document.createElement("img");
        
        h2.textContent = `${prophet.order} - ${prophet.name} ${prophet.lastname}`;
        p1.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`

        p3.setAttribute("class", "age");
        let birth = new Date(prophet.birthdate)
        let death = new Date(prophet.death)
        if (prophet.death === null) {
            p3.textContent = "Still serving"
        }
        else {
            let age = death.getFullYear() - birth.getFullYear();
            p3.textContent = `Age at death: ${age}`
        }

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}