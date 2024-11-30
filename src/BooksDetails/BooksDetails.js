import { FormattedMessage } from 'react-intl';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function BooksDetails({ book }) {
    return (
        <tr className="accordion-row">
            <td colSpan="6">
                <div className="accordion-content">
                    <div className="book-image-container">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="book-image"
                        />
                        <p className="book-likes">
                            <span className="like-icon"><FavoriteIcon /></span> {book.likes}
                        </p>
                    </div>
                    <div className="book-details">
                        <p className="book-title">
                            <strong>{book.title}</strong>
                            <span className="book-type"> {book.format}</span>
                        </p>
                        <p className="book-author">{book.authors}</p>
                        <p className="book-publisher">
                            {book.publisher}, {book.date}
                        </p>
                        <p><strong><FormattedMessage id='review' />:</strong></p>
                        <ul>
                            {book.reviews.length ? (
                                book.reviews.map((review, index) => (
                                    <li key={index}>
                                        <p>{review.text}</p>
                                        <p className="review-author">{review.author}, {review.publisher}</p>
                                    </li>
                                ))
                            ) : (
                                <p className="review-author"><FormattedMessage id='isReviewed' /></p>
                            )}
                        </ul>
                    </div>
                </div>
            </td>
        </tr>
    );
};