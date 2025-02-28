// TOGGLE BUTTON
document.getElementById('toggleButton').addEventListener('click',function(){
    let navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('show')) {
        this.innerHTML = ' <i class="fa fa-bars"></i>';
    } else {
        this.innerHTML = '<i class="fa fa-x"></i>';
    }
    navMenu.classList.toggle('show');
});
// data fetch
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data from the data folder
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            const languagesList = document.getElementById("languages-list");

            // Loop through languages and display them
            data.programmingLanguages.forEach(lang => {
                const langCard = document.createElement("div");
                langCard.classList.add("language-card");

                langCard.innerHTML = `
                    <img src="${lang.image}" alt="${lang.name}">
                    <div class="language-info">
                        <h2>${lang.name}</h2>
                        <p>${lang.description}</p>
                        <p><strong>Experience Level:</strong> ${lang.experienceLevel}/5</p>
                    </div>
                `;

                languagesList.appendChild(langCard);
            });
        })
        .catch(error => console.error("Error loading the data:", error));
});

// year
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

//last modified
const date = document.querySelector("#lastModified");
date.innerHTML = `<span>${document.lastModified}<span>`;