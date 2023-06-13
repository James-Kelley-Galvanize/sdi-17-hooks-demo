import AppContext from "../context/AppContext";
import { useContext } from "react";

export default function SearchBar({}) {
  let {
    goodSearch,
    searchTerm,
    setSearchTerm,
    setGoodSearch,
    setSubmittedSearch,
  } = useContext(AppContext);

  let handleChange = (e) => {
    if (!goodSearch) setGoodSearch(true);
    setSearchTerm(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedSearch(searchTerm);
  };

  return (
    <div id="search-bar">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        {"   "}
        <button type="submit">LOOKUP</button>
      </form>
    </div>
  );
}
