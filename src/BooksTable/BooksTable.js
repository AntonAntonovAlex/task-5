import { useState } from "react";
import BooksCard from "../BooksCard/BooksCard";
import BooksTableHeader from "../BooksTableHeader/BooksTableHeader";

export default function BooksTable({ bookList })  {
  const [expandedRow, setExpandedRow] = useState(null);
  const toggleRow = (id) => {
      setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="books-table-container">
      <table className="books-table">
        <BooksTableHeader />
        <tbody>
          {bookList.map((book, index) => (
            <BooksCard key={book.id} index={index} book={book} toggleRow={toggleRow} expandedRow={expandedRow}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};
