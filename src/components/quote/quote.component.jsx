import React from "react";
import "./quote.styles.css";

const Quote = ({ quote }) => {
  return (
    <div className="quote">
      <img
        className="quote-image"
        src={quote.characterImageUrl}
        alt={quote.character}
      />
      <span className="quote-text">{quote.quote}</span>
      <span className="quote-attribution"> - {quote.character}</span>
      <span className="quote-timeline">
        S{quote.season}E{quote.seasonEpisode}, "{quote.episodeTitle}"
      </span>
    </div>
  );
};

export default Quote;
