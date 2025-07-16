import Image from 'next/image';
import BuyOrRent from './BuyRent';

const BookDetails = ({ book }) => {
  return (
    <div className="p-2 flex flex-col items-center">
      <div className="mb-2">
        <Image
          className="mr-2 rounded-md"
          src={book.cover}
          alt={book.title}
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className="p-2 flex flex-col items-center">
        <h1 className="text-3xl text-green-500">{book.title}</h1>
        <h3 className="text-xl text-yellow-400">Author: {book.author}</h3>
        <p className="mt-3 md:w-2/3">{book.description}</p>
        <div className="text-xl mt-3 mb-5">
          <p>
            Book Type: {book.genre}, Pages: {book.pages} and{' '}
            {book.stock ? `${book.stock} pieces are in stock` : `No Stock`}
          </p>
        </div>
        <BuyOrRent book={book} />
      </div>
    </div>
  );
};

export default BookDetails;
