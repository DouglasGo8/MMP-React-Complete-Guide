import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

/*const DUMMY_QUOTES = [
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
];*/

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
