const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const loader = document.getElementById("loader");
const jokeContent = document.getElementById("jokeContent");

async function getJoke() {
    
    loader.style.display = "block";
    jokeContent.classList.add("hide");

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();

        
        setTimeout(() => {
            setupEl.innerText = data.setup;
            punchlineEl.innerText = data.punchline;

            loader.style.display = "none";
            jokeContent.classList.remove("hide");
        }, 500);

    } catch (error) {
        loader.style.display = "none";
        setupEl.innerText = "Failed to load joke 😢";
        punchlineEl.innerText = "";
        jokeContent.classList.remove("hide");
        console.error(error);
    }
}