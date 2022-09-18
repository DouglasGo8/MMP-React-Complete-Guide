

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning ReactJs is Fun",
  },
  {
    id: "q2",
    author: "Claus Isben",
    text: "Learning Apache Camel is Great",
  },
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
};

export default AllQuotes;
