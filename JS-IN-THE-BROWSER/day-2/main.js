let fetchData = function(URL, fn) {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      fn(data);
    });
  }

function renderMovies(data) {
  data.results.forEach(result => {
    const movie = $(`<a class="movie-link" href="${result.url}"><h3 class="title">${result.title}</h3></a>`).click(function(e) {
      e.preventDefault();
      fetchData(e.currentTarget, fetchStarshipsData);
    });
    $('#film-list').append(movie);
  });
}

function fetchStarshipsData(data){
  for (const ship of data.starships) {
    fetchData(ship, renderStarshipData);
  }
}

function renderStarshipData(data) {
  const StarshipElement = $(`<a class="ship-link" href="${data.url}"><h3 class="starship">${data.name}</h3></a>`).click((e) => {
    e.preventDefault();
    fetchData(e.currentTarget, fetchPilotData);
  });
  $('#starships-container').append(StarshipElement);
}

function fetchPilotData(data) {
  if (data.pilots.length > 0) {
    for (const pilot of data.pilots) {
      fetchData(pilot, renderPilotData)
    }
  }
}

function renderPilotData(data) {
  const pilotElement = $(`<a href="${data.url}"><h3 class="pilots">${data.name}</h3><a/>`).click((e) => {
    e.preventDefault();
    addToFavorite(data);
  });
    $('#pilot-list').append(pilotElement);
}

function addToFavorite(data) {
  const favElement = $(`<h3>${data.name}</h3>`).click((e) => {
    removeFav(e);
  });
  $('#favorites-list').append(favElement);
}

function removeFav(e) {
  e.target.remove();
}

fetchData('https://swapi.co/api/films/', renderMovies);
