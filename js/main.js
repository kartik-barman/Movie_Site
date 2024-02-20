// const APILINK = "https://api.themoviedb.org/3/movie/550?api_key=0ee4e200ef8568847bf65fb1a564bfa9";

// const IMGAPI = "https://image.tmdb.org/t/p/w1280";

const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";


const moviesSection = document.querySelector(".movies-section");

returnMovies(APILINK);
  function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
        const row = document.createElement("div");
        row.setAttribute("class", "row")

        const column = document.createElement("div");
        column.setAttribute("class", "column");

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const image = document.createElement("img");
        image.setAttribute("class", "thumbnail");
        const title = document.createElement("h3");
        title.setAttribute("id", "title");

        image.src = `${IMG_PATH + element.poster_path}`;
        title.innerHTML = `${element.title}`;
        row.appendChild(column);
        column.appendChild(card)
        card.appendChild(image)
        card.appendChild(title)
        moviesSection.appendChild(row)
    });
  });
  }