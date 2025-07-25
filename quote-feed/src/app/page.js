import { getAllQuotes } from '@/db/quoteData';
import QuoteList from '@/component/QuoteList';

export default function Home() {
  const quotes = getAllQuotes();

  return (
    <div>
      <QuoteList quotes={quotes} />
    </div>
  );
}
