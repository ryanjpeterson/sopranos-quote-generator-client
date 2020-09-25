import React from "react";
import "./quoteContainer.styles.css";

import FeaturedQuote from "../featured-quote/featuredQuote.component";
import Quote from "../quote/quote.component";

const QuoteContainer = ({ quotes }) => {
  const quoteArr = quotes;
  const featuredQuote = quoteArr.splice(0, 1);

  return (
    <div className="quote-container">
      {featuredQuote.map((featuredQuote) => (
        <FeaturedQuote key="featured-quote" featuredQuote={featuredQuote} />
      ))}
      <div className="quotes">
        {quoteArr.map((quote) => {
          return <Quote key={quote.id} quote={quote} />;
        })}
      </div>
    </div>
  );
};

export default QuoteContainer;
