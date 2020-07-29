import React from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="pt-10  text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search for a GitHub User
      </h1>
      <Form />
    </div>
  );
}

export default App;
