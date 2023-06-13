import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WordList from "./components/WordList";
import NoResults from "./components/NoResults";
import AppContext from "./context/AppContext";
import useToggleState from "./customHooks/useToggleState";

// const randomWordUrl = `https://random-word.ryanrk.com/api/en/word/random`; // random word API, less go
const randomWordUrl = `https://random-word-api.herokuapp.com/word`;
const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

function App(props) {
  let [searchTerm, setSearchTerm] = useState("");
  let [results, setResults] = useState([]);
  let [goodSearch, setGoodSearch] = useState(true);
  let [submittedSearch, setSubmittedSearch] = useState("");
  let [stateA, toggleStateA] = useToggleState();

  useEffect(() => {
    fetch(randomWordUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setSearchTerm(data[0]);
        setSubmittedSearch(data[0]);
      });
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        let goodSearch = !!data.length;
        setGoodSearch(goodSearch);
        setResults(data);
      });
  }, [submittedSearch]);

  const valueObj = {
    searchTerm,
    results,
    goodSearch,
    submittedSearch,
    setResults,
    setSearchTerm,
    setGoodSearch,
    setSubmittedSearch,
  };

  return (
    <AppContext.Provider value={valueObj}>
      <div className="App">
        <div>{stateA ? "TRUE" : "FALSE"}</div>
        <button
          onClick={() => {
            toggleStateA();
          }}
        >
          {" "}
          TOGGLE
        </button>
        <header className="App-header">
          <p>Look up words:</p>
          <SearchBar />
          {results.length ? (
            <WordList />
          ) : !goodSearch ? (
            <NoResults searchTerm={searchTerm} />
          ) : (
            <></>
          )}
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
