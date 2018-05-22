// global variables

const message = "he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.";
const mainArticle = document.querySelector("#main-article");

const appendAll = () => {
    mainArticle.innerHTML = `
    <section id="first-section">
    <h3 id="politician-name">
            Tulsi Gabbard</h3>
    <h3 id="district-info">Representative for Hawaii's 2nd congressional district</h3>
    <h3 id="political-affiliation">Democrat</h3>
    <img id="politician-image" src="https://www.govtrack.us/data/photos/412532-100px.jpeg" alt="Tulsi Gabbard">
</section>

<section id="second-section">
    <h3>List of Committees</h3>
    
    <h4>House Committee on Armed Services</h4>
    <ul>
        <li>Member, Subcommittee on Emerging Threats and Capabilities</li>
        <li>Member, Subcommittee on Readiness</li>
    </ul>

    <h4>House Committee on Foreign Affairs</h4>
    <ul>
        <li>Member, Subcommittee on Asia and the Pacific</li>
        <li>Member, Subcommittee on The Middle East and North Africa</li>
    </ul>    
</section>

<section id="third-section">
    <div><a href="https://gabbard.house.gov/" target="_blank">Learn More</a></div>
    <div><a href="">Contact</a></div>
    <div><a href="">Email</a></div>
</section>
`;
}


const challengeFunction = () => {
    const addSection = document.createElement("section");
    let textnode = document.createTextNode(message);
    addSection.appendChild(textnode);
    secondSection.appendChild(addSection);
}

const advancedChallenge = () => {
    let  messageAttribute = document.createAttribute("congressional-district");
    messageAttribute.value = "2nd District";
    mainArticle.setAttributeNode(messageAttribute);
    console.log(mainArticle);
}

appendAll();

const secondSection = document.querySelector("#second-section");

challengeFunction();
advancedChallenge();




