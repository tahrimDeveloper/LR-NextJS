import QuoteDetails from '@/component/QuoteDetails';

function QuotePage({ params: { id } }) {
  return (
    <div className="shadow-teal-700 shadow-md border border-teal-600 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100 m-auto">
      <QuoteDetails id={id} />
    </div>
  );
}

export default QuotePage;
