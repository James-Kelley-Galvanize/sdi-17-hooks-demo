export default function NoResults({ searchTerm }) {
  return (
    <div id="no-results">
      <h5>{`No data found for searched term: ${searchTerm}`}</h5>
    </div>
  );
}
