import BooksRow from "../BooksRow/BooksRow";
import BooksDetails from "../BooksDetails/BooksDetails";

export default function BooksCard({ book, index, expandedRow, toggleRow }) {
    const isExpanded = expandedRow === book.id;
    return (
    <>
        <BooksRow 
            index={index} 
            book={book} 
            toggleRow={toggleRow} 
            isExpanded={isExpanded} 
        />
        {isExpanded && <BooksDetails book={book} />}
    </>
    );
};