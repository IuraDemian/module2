class Movie 
{
    constructor(id, title, director, trailerURL, releaseYear, boxOffice)
    {
      this.id = id;
      this.title = title;
      this.director = director;
      this.trailerURL = trailerURL;
      this.releaseYear = releaseYear;
      this.boxOffice = boxOffice;
    }
  
    toString() 
    {
        return `${this.title} (${this.releaseYear}), режиссер ${this.director}`;
    }
}
  
class MovieCollection 
{
    constructor() 
    {
        this.movies = [];
    }
  
    addMovie(movie) 
    {
        if (!this.movies.some(existingMovie => existingMovie.id === movie.id)) 
        {
            this.movies.push(movie);
            alert(`фільм ${movie.title} доданий.`);
            return true;
        } 
        else 
        {
            alert(`фільм ${movie.title} уже доданий.`);
            return false;
        }
    }
}
  
const movieCollection = new MovieCollection();
  
document.getElementById('addMovieForm').addEventListener('submit', 

function(event) 
{
    event.preventDefault();
  
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const trailerURL = document.getElementById('trailerURL').value;
    const releaseYear = parseInt(document.getElementById('releaseYear').value);
    const boxOffice = parseInt(document.getElementById('boxOffice').value);

  
    const movie = new Movie(id, title, director, trailerURL, releaseYear, boxOffice);
  
    if (movieCollection.addMovie(movie)) 
    {
    document.getElementById('addMovieForm').reset();
    }
}
); 
