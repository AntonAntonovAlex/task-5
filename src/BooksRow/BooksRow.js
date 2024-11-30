import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function BooksRow({ index, book, toggleRow, isExpanded }) {
    return (
        <tr className="table-row">
            <td>{index + 1}</td>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.authors}</td>
            <td>{book.publisher}, {book.date}</td>
            <td>
                <button
                    className="accordion-toggle"
                    onClick={() => toggleRow(book.id)}
                >
                    {isExpanded ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />}
                </button>
            </td>
        </tr>
    );
};