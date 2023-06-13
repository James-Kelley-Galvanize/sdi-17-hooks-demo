export default function WordListEntryDefinition({ definitionData }) {
  let { definition } = definitionData;
  return (
    <li className="word-list-entry-definition">
      <p>{definition}</p>
    </li>
  );
}
