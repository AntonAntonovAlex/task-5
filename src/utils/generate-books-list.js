import generateBasedOnFractional from "../utils/generate-based-on-fractional.js"
import { Faker, pl, pt_BR, en } from '@faker-js/faker';

const FAKER_LOCALES = {
    'pl-PL': pl,
    'en-US': en,
    'pt-BR': pt_BR,
};
const FAKER_LOCALES_OFFSET = {
  'en-US': 0,
  'pl-PL': 11,
  'pt-BR': 22,
};

export default function generateBooksList(currentLocale, seedValue, likesValue, reviewValue, offset) {
    const customFaker = new Faker({
        locale: FAKER_LOCALES[currentLocale],
    });
    let booksList = [];

    function generateBooks(bookIndex) {
        customFaker.seed(+seedValue + bookIndex + offset + likesValue * 10 + reviewValue * 10 + FAKER_LOCALES_OFFSET[currentLocale]);
        const generateReviews = () => {
          const countReview = generateBasedOnFractional(reviewValue);
          let reviews = [];
          for (let i = 1; i <= countReview; i++) {
            reviews.push({
              author: customFaker.person.fullName(),
              publisher: customFaker.book.publisher(),
              text: customFaker.lorem.paragraph()
            });
          };
          return reviews;
        };
    
        const book = {
          id: customFaker.number.int(),
          isbn: customFaker.commerce.isbn(),
          title: customFaker.book.title(),
          authors: customFaker.book.author(),
          publisher: customFaker.book.publisher(),
          format: customFaker.book.format(),
          image: customFaker.image.url(),
          likes: generateBasedOnFractional(likesValue),
          date: customFaker.date.between({from: '1950-01-01T00:00:00.000Z', to: '2024-01-01T00:00:00.000Z'}).getFullYear(),
          reviews:generateReviews(),
        };
        return book;
      };

    for (let i = 1; i <= 10; i++) {
        booksList.push(generateBooks(i));
    };
    return booksList;
};
