import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaTwitterSquare } from "react-icons/fa";

const QuoteBox = ({ getNewQuote, quote, author }) => {
  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">{author}</div>
      <div id="bottom">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote} --${author}`}
          id="tweet-quote"
        >
          <FaTwitterSquare id="icon" />
        </a>
        <div onClick={getNewQuote} id="new-quote">
          New Quote
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
