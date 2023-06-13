import WordListEntryDefinitions from "./WordListEntryDefinitions";

export default function WordListEntryMeaning({ meaningData }) {
  let { partOfSpeech, definitions, synonyms, antonyms } = meaningData;
  return (
    <div className="word-list-entry-meaning">
      <h3>{partOfSpeech}</h3>
      <WordListEntryDefinitions definitions={definitions} />
      {synonyms.length ? (
        <div className="word-list-entry-meaning-synonyms">
          <h4>Synonyms</h4>
          {synonyms.join(", ")}
        </div>
      ) : (
        <></>
      )}
      {antonyms.length ? (
        <div className="word-list-entry-meaning-antonyms">
          <h4>Antonyms</h4>
          {antonyms.join(", ")}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
