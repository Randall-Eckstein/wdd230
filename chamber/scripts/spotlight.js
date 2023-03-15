const spotlightURL = "https://raw.githubusercontent.com/Randall-Eckstein/wdd230/main/chamber/json/data.json";

async function getDirectoryData() {
    const response = await fetch(spotlightURL);
    const data = await response.json();
    // console.table(data.members);
    populateSpotlight(data.members);
}

getDirectoryData();


const populateSpotlight = (members) => {
    const spotlightContainer = document.querySelector("#spotlight-container");

    const goldMembers = [];

    members.forEach((member) => {
        if (member.membershipLevel === "Gold" || member.membershipLevel === "Silver") {
            goldMembers.push(member);
            console.log(member.name)
        }
    });


        for ( i = 0; i < 3; i++ ) {
            let choice = Math.floor(Math.random() * goldMembers.length);
            createCard(goldMembers[choice]);
            goldMembers.splice(choice, 1);
        };

    function createCard(details) {
        let card = document.createElement("div");
        card.setAttribute("class", "sl-card")
        let slName = document.createElement("h3");
        slName.setAttribute("class", "sl-name");
        let slImg = document.createElement("img");
        let slBlurb = document.createElement("h1");
        slBlurb.setAttribute("class", "sl-blurb");
        let slHR = document.createElement("hr");
        slHR.setAttribute("class", "hr_light");
        let slContact = document.createElement("p");
    
        slName.textContent = details.name;
        slImg.setAttribute("class", "sl-logo");
        slImg.setAttribute("src", details.imageurl);
        slImg.setAttribute("alt", `Picture of ${details.name}`);
        slImg.setAttribute("loading", "lazy");
        slImg.setAttribute("width", 160);
        slImg.setAttribute("height", 120);
        slBlurb.innerText = details.blurb;
        if (details.phone === "N/A") {
            slContact.innerHTML = `Address: ${details.shortAddress}`;
        } else {
            slContact.innerHTML = `Contact: ${details.phone}</p> <p>Address: ${details.shortAddress}`;
        }
        
        card.appendChild(slName);
        card.appendChild(slImg);
        card.appendChild(slBlurb);
        card.appendChild(slHR);
        card.appendChild(slContact);
        spotlightContainer.appendChild(card);
    }};