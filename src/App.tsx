import React, { FC } from "react";
import BookApp from "./components/BookApp";
import "./App.css";

const App: FC = () => {
  return (
    <div className="w-full">
      <BookApp />
    </div>
  );
};

export default App;
