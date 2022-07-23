const resultSection = document.querySelector('#results');
const searchButton = document.querySelector('#search');



var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var movie = JSON.parse(httpRequest.responseText);
      movie.Search.forEach(function(item) {
        var movieTitle = item.Title;
        var movieYear = item.Year;
        var moviePoster = item.Poster;
        var movieType = item.Type;
        var movieImdbID = item.imdbID;
        var movieLink = "http://www.imdb.com/title/" + movieImdbID;
        var movieDiv = document.createElement('div')
        movieDiv.className = 'search-results';
        movieDiv.style.display = 'flex';
        movieDiv.style.alignItems = 'center';
        movieDiv.style.justifyContent = 'space-evenly';
        movieDiv.style.width = '100%';
        movieDiv.style.marginBottom = '1.5rem';
        //change everyother movieDiv to have a different background color
        
        
      
        movieDiv.innerHTML += '<h2 class="title"><a href="' + movieLink + '">' + movieTitle + '</a></h2>' + '<p class="year">' + movieYear + '</p>' + '<img class="poster" src="' + moviePoster + '">' + '<p>' + movieType + '</p>';

        resultSection.appendChild(movieDiv);    
        });
        

    } else {
        console.log("Error: " + httpRequest.statusText);
        
    }
}
}
    
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}

      function searchMovie() {

        var movieTitle = document.querySelector("input").value;
        var url = "http://www.omdbapi.com/?s=" + movieTitle + "&apikey=df77ea71";
        httpRequest.open("GET", url);   
        httpRequest.send();
        }
        
    
        searchButton.addEventListener('click', searchMovie);
      