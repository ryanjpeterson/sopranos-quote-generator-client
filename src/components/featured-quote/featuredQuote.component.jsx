import React from "react";
import "./featuredQuote.styles.css";

const FeaturedQuote = ({ featuredQuote }) => {
  return (
    <div className="featured-quote">
      <div className="page-header">
        <h1>Sopranos Quote Generator</h1>
        <span className="italic">Featured Quote</span>
      </div>

      <div className="page-header-content">
        <img
          className="quote-image"
          src={featuredQuote.characterImageUrl}
          alt={featuredQuote.character}
        />
        <span className="quote-text">{featuredQuote.quote}</span>
        <span className="quote-attribution"> - {featuredQuote.character}</span>
        <span className="quote-timeline">
          S{featuredQuote.season}E{featuredQuote.seasonEpisode}, "
          {featuredQuote.episodeTitle}"
        </span>
      </div>
    </div>
  );
};

export default FeaturedQuote;
