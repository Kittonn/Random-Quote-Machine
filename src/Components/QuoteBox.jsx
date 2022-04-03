import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { textActions } from "../store/textSlice";
const QuoteBox = () => {
  const { quote, author } = useSelector((state) => state.text.textObj);
  const dispatch = useDispatch();
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
        <div onClick={() => dispatch(textActions.newRandom())} id="new-quote">
          New Quote
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
