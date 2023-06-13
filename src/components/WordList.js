import { useContext } from "react";
import AppContext from "../context/AppContext";
import WordListEntry from "./WordListEntry";

export default function WordList(props) {
  let { results } = useContext(AppContext);
  return (
    <div id="word-list">
      {results.map((wordData, index) => (
        <WordListEntry wordData={wordData} index={index} />
      ))}
    </div>
  );
}
