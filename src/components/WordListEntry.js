import WordListEntryMeanings from "./WordListEntryMeanings";

export default function WordListEntry({ wordData, index }) {
  let { word, phonetic, meanings } = wordData;
  return (
    <div className="word-list-entry" key={index}>
      <h3>
        {word} (pron. "{phonetic}")
      </h3>
      <WordListEntryMeanings meanings={meanings} />
    </div>
  );
}
