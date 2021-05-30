import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../../components/Navigation';
import CollapsibleTable, { itemTypes } from '../../components/Table';
import { useAction } from '../../hooks/useActions';
import { BooksService } from '../../services/books.service';
import { booksSelector } from '../../store/selectors/books.selector';

const BookReview = () => {
   const books = useSelector(booksSelector.getAll);
   const booksActions = useAction(BooksService);

   const deleteBook = (item: itemTypes) => {
      const bookToDelete = books.find((book) => book.id === item.id);
      if (bookToDelete) {
         booksActions.deleteBook(bookToDelete);
      }
   };
   return (
      <>
         <Navigation />
         <h1>Book reviews</h1>
         <CollapsibleTable item={books} type="book" onDelete={deleteBook} />
      </>
   );
};

export default BookReview;
