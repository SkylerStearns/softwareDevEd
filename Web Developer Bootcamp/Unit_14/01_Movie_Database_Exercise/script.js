// Create an array that contains data for each of these keys.
// title, rating, watched
// length = 5


let movies = [
  {
    title: 'Ace Venture: Pet Detective',
    rating: 4.7,
    watched: true,
  },
  {
    title: 'Yes Man',
    rating: 4.4,
    watched: true,
  },
  {
    title: 'Me, Myself & Irene',
    rating: 4.3,
    watched: true,
  },
  {
    title: 'The Truman Show',
    rating: 4.2,
    watched: true,
  },
  {
    title: 'The Number 23',
    rating: 2.3,
    watched: true,
  },
  {
    title: 'Sonic the Hedgehog',
    rating: 2,
    watched: false,
  },
];

function makeReview(movie) {
  let hasWatched;
  let result;
  if (movie.watched) {
    hasWatched = 'watched';
  } else {
    hasWatched = 'not watched';
  }
  result = `I have ${hasWatched} "${movie.title}" - ${movie.rating} stars.`;
  return(result);
}

function printReviews() {
  movies.forEach((movie) => {
    console.log(makeReview(movie));
  })
}

printReviews();
