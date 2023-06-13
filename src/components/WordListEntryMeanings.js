import WordListEntryMeaning from "./WordListEntryMeaning";

export default function WordListEntryMeanings({ meanings }) {
  return (
    <div className="word-list-entry-meanings">
      {meanings?.map((meaningData, index) => {
        return (
          <>
            <WordListEntryMeaning meaningData={meaningData} />
            {index < meanings.length - 1 ? <hr /> : <></>}
          </>
        );
      })}
    </div>
  );
}
