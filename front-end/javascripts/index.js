// globals

const showsURL = "http://localhost:3000/shows";
const genresURL = "http://localhost:3000/genres";
const showForm = document.getElementById("add-show-form");
const titleInput = document.getElementById("title-input");
const networkInput = document.getElementById("network-input");
const yearInput = document.getElementById("year-input")
const seasonInput = document.getElementById("season-input");
const ratingInput = document.getElementById("rating-input");
const imageInput = document.getElementById("image-link-input");
const genreInput = document.getElementById("genre-input");
const showList = document.getElementById("shows-list");


//

document.addEventListener("DOMContentLoaded", () => {
    // loadGenres();
    Genre.fetchGenres();
    Genre.renderGenres();
    Show.fetchShows();
});

// const loadGenres = async () => {
//     const response = await fetch(genresURL);
//     const genres = await response.json();
//     console.log('genres', genres.data)
// }

showForm.addEventListener("submit", Show.submitShow) 
