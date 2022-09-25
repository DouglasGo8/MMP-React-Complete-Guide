import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/ui/LoadingSpinner";

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

const QuoteDetail = () => {
  const match = useRouteMatch();
  const urlParams = useParams();
  //

  const { quoteId } = urlParams;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  //const quote = DUMMY_QUOTES.find((quote) => quote.id === urlParams.quoteId);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote) {
    return <p>No Quote found!!!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {
        // math.path === `/quotes/${urlParams.quoteId}`
      }
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
