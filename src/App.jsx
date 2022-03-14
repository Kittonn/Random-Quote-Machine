import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteBox from "./Components/QuoteBox";
const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const App = () => {
  const [quoteList, setQuoteList] = useState([]);
  const [quoterandom, setQuoterandom] = useState({});

  const getNewQuote = () => {
    setQuoterandom(quoteList[Math.floor(Math.random() * quoteList.length)]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(url);
    const quotes = await res.data;
    setQuoteList(quotes.quotes);
    setQuoterandom(
      quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]
    );
  };

  return (
    <div id="container">
      <QuoteBox getNewQuote={getNewQuote} quote={quoterandom.quote} author={quoterandom.author} />
      {/* <div>{quoterandom.quote}</div> */}
      {/* <div>{quoterandom.author}</div> */}
      {/* <button onClick={getNewQuote}>Random</button> */}
    </div>
  );
};

export default App;
