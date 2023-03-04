const url = "https://raw.githubusercontent.com/Randall-Eckstein/wdd230/main/chamber/json/data.json";

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

getDirectoryData();


const displayMembers = (members) => {
    const cards = document.querySelector("div.cards");

    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let longMembershipLevel = document.createElement("h4");
        let shortMembershipLevel = document.createElement("h4");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let dateJoined = document.createElement("h4");
        let portrait = document.createElement("img");
        
        card.setAttribute("class", "member");
        address.setAttribute("class", "address");
        phone.setAttribute("class", "phone");
        name.textContent = member.name;

        longMembershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        longMembershipLevel.setAttribute("class", `${member.membershipLevel} long`);

        shortMembershipLevel.textContent = member.membershipLevel;
        shortMembershipLevel.setAttribute("class", `${member.membershipLevel} short`);

        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        dateJoined.textContent = `Member Since: ${new Date(member.dateJoined).toLocaleDateString()}`;
        dateJoined.setAttribute("class", "joined");


        portrait.setAttribute("src", member.imageurl);
        portrait.setAttribute("alt", `Picture of ${member.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", member.size[0]);
        portrait.setAttribute("height", member.size[1]);

        card.appendChild(name);
        card.appendChild(longMembershipLevel);
        card.appendChild(shortMembershipLevel);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(dateJoined);

        cards.appendChild(card);
    });
}


const memberGrid = document.querySelector("div.cards");
const gridButton = document.getElementById("gridButton");
const listButton = document.getElementById("listButton");

let setGrid = function () {
    memberGrid.removeAttribute("class", "cards list");
    memberGrid.setAttribute("class", "cards grid");
};

let setList = function () {
    memberGrid.removeAttribute("class", "cards grid");
    memberGrid.setAttribute("class", "cards list");
};

gridButton.addEventListener("click", setGrid);
listButton.addEventListener("click", setList);