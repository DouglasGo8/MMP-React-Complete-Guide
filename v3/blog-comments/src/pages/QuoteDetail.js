import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
  const match = useRouteMatch();
  const urlParams = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === urlParams.quoteId);

  if (!quote) {
    return <p>No Quote found!!!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {
        // math.path === `/quotes/${urlParams.quoteId}`
      }
      <Route path={match.path} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`${match.url}/comments`}
          >Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
