import {createStore} from 'redux';
const books = [
  {
    id: 0,
    title: 'El Perfume',
    author: 'Patrick Süskind',
    image: 'el_perfume.jpeg',
    rating: 0,
  },
  {
    id: 1,
    title: 'La insoportable levedad del ser',
    author: 'Milan Kundera',
    image: 'la_insoportable.jpg',
    rating: 0,
  },
  {
    id: 2,
    title: 'Azteca',
    author: 'Gary Jennings',
    image: 'azteca.jpg',
    rating: 0,
  },
  {
    id: 3,
    title: 'Moby Dick',
    author: 'Herman Melville',
    image: 'Moby-Dick.jpg',
    rating: 0,
  },
  {
    id: 4,
    title: 'Lord of the Flies',
    author: 'William Golding',
    image: 'lord_of_flies.jpg',
    rating: 0,
  },
  {
    id: 5,
    title: "Alice's Adventures In Wonderland",
    author: 'Lewis Carroll',
    image: 'alice_adventures.jpg',
    rating: 0,
  },
  {
    id: 6,
    title: 'The Woman in White',
    author: 'Wilkie Collins',
    image: 'the_woman_in_white.jpg',
    rating: 0,
  },
  {
    id: 7,
    title: 'Little Women',
    author: ' Louisa M. Alcott',
    image: 'little_women.jpg',
    rating: 0,
  },
  {
    id: 8,
    title: 'The Way We Live Now ',
    author: 'Anthony Trollope',
    image: 'the_way_we.jpg',
    rating: 0,
  },
  {
    id: 9,
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    image: 'anna_karenina.jpg',
    rating: 0,
  },
  {
    id: 10,
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    image: 'karamazov.jpg',
    rating: 0,
  },
  {
    id: 11,
    title: 'The Portrait of a Lady',
    author: 'Henry James',
    image: 'the_portrait.jpg',
    rating: 0,
  },
  {
    id: 12,
    title: 'The Trial',
    author: 'Franz Kafka',
    image: 'the_trial.jpg',
    rating: 0,
  },
];

// LLAMADAS SINCRONAS

// LLAMADA ASINCRONA
// FETCH

const initialState = {
  books: [
    {
      id: 4,
      title: 'Lord of the Flies',
      author: 'William Golding',
      image: 'lord_of_flies.jpg',
      rating: 0,
    },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return {books};
    case 'RATING_BOOK': {
      const _state = {books: [...state.books]};
      const index = _state.books.findIndex((book) => book.id === action.id);
      _state.books[index].rating = action.rating;
      return _state;
    }
    default:
      return state;
  }
};

export const store = createStore(reducer);
