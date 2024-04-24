//a;
class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  
  const movie = new Movie("Inception", "Warner Bros.", "PG-13");
  console.log(movie.title); 
  console.log(movie.studio); 
  console.log(movie.rating); 


  //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  
  const movie1 = new Movie("Inception", "Warner Bros.");
  console.log(movie1.title); 
  console.log(movie1.studio); 
  console.log(movie1.rating); 
  
  const movie2 = new Movie("The Dark Knight", "Warner Bros.", "PG-13");
  console.log(movie2.title); 
  console.log(movie2.studio); 
  console.log(movie2.rating); 
  

  //c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
  class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  
  const movies = [
    new Movie("Inception", "Warner Bros.", "PG"),
    new Movie("The Dark Knight", "Warner Bros.", "PG-13"),
    new Movie("Finding Nemo", "Pixar", "G"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("Harry Potter and the Sorcerer's Stone", "Warner Bros.", "PG")
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  //d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
  class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  // Creating an instance of Movie with the provided details
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Printing the details of the created instance
  console.log(casinoRoyale);
  