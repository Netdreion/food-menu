import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          placeholder="type text here"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button
          onClick={handleRandomMeal}
          className="btn btn-hipster"
          type="btn"
        >
          {" "}
          Suprime me
        </button>
      </form>
    </header>
  );
};

export default Search;
