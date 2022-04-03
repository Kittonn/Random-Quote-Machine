import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import QuoteBox from "./Components/QuoteBox";
import { getTexts } from "./store/textSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTexts());
  }, [dispatch]);

  return (
    <div id="container">
      <QuoteBox />
    </div>
  );
};

export default App;
