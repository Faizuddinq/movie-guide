const searchForm =document.querySelector("form");
const movieCont =document.querySelector(".movie-cont");
const inputBox = document.querySelector(".input-box");

const getMovieInfo = async (movie)=>{
    const myAPIkey="28f911b8";
    const URL = `http://www.omdbapi.com/?apikey=${myAPIkey}&t=${movie}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    showMovieData(data);
};
const showMovieData = (data)=>{
    movieCont.innerHTML="";
    //use destructuring assgn to extract props from data obj json
    const {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster}= data;
    
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-info");
    movieElement.innerHTML = `<h2>${Title}</h2>
    <p><strong>Rating:&#11088</strong>${imdbRating}</p>`;
    const movieGenre = document.createElement("div");
    movieGenre.classList.add("movie-genre");
    Genre.split(",").forEach(element =>{
        const p=document.createElement("p");
        p.innerText = element;
        movieGenre.appendChild(p);
    }
    );
    movieElement.appendChild(movieGenre);

    movieElement.innerHTML += `
    <p><strong>Released: </strong>${Released}</p>
    <p><strong>Duration: </strong>${Runtime}</p>
    <p><strong>Cast: </strong>${Actors}</p>
    <p><strong>Plot: </strong>${Plot}</p>`;

    const moviePosterEle = document.createElement("div");
    moviePosterEle.classList.add(".movie-posterr");
    moviePosterEle.innerHTML = `<img src="${Poster}"/>`;


    movieCont.appendChild(moviePosterEle);
    movieCont.appendChild(movieElement);
};
searchForm.addEventListener("submit", (evt)=>{
  evt.preventDefault();
  const movieName=inputBox.value.trim();
  if(movieName != ''){
      getMovieInfo(movieName);
  }
});