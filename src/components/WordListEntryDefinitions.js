import WordListEntryDefinition from "./WordListEntryDefinition";

export default function WordListEntryDefinitions({ definitions }) {
  return (
    <ul className="word-list-entry-definitions">
      {definitions.map((definitionData) => (
        <WordListEntryDefinition definitionData={definitionData} />
      ))}
    </ul>
  );
}
