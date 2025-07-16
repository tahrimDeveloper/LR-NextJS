import { getBookById } from '@/app/lib/fake-data';
import BookDetail from '@/app/ui/books/BookDetail';

const BookDetails = async ({ params: { id } }) => {
  const book = await getBookById(id);
  console.log(book);
  return <BookDetail book={book} />;
};

export default BookDetails;
