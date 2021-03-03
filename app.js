const quoteButton = document.querySelector("#new-quote");
const par = document.querySelector(".card-title");
const apend = document.querySelector("#loader");
const twitterHref = document.querySelector("#tweet-quote");
const atakanButton = document.querySelector(".atakan");


async function GetKanye() {
    addLoader();    
    const response = await fetch("https://api.kanye.rest");
    const kanyeData = await response.json()
    return kanyeData.quote;
}
quoteButton.addEventListener("click", function () {
    GetKanye()
        .then(kanye => {
            twitterHref.href ="https://twitter.com/intent/tweet?text="+kanye+".";
            responsiveVoice.speak(kanye);
            par.textContent = kanye;         
        })
        .catch(err => console.warn(err));

});

function addLoader() {
    const div = document.createElement("div");
    div.className = "loader";
    apend.appendChild(div);
    setTimeout(() => {
        div.remove();
    },200)     
}




