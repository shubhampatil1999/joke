const quote = document.getElementById("quote");
const type = document.getElementById("type");
const button = document.querySelector("button");
const api_url = "https://v2.jokeapi.dev/joke/Any?type=single";

async function getquote(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    quote.innerHTML = data.joke;
    type.innerHTML = data.category;
    // if (data && data.joke) {
    //     quote.textContent = data.joke;
    //     type.textContent = data.category;
    // } else {
    //     quote.textContent = "No joke found!";
    //     type.textContent = "";
    // }
}

// Fetch a joke when the page loads
getquote(api_url);

// // Add an event listener to the button to fetch a new joke when clicked
// button.addEventListener("click", () => {
//     getquote(api_url);
// });
