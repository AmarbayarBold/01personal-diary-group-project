import EntryCard from "./EntryCard";

const StoryList = ({ entries }) => {
  console.log(entries);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
        {entries.map((entry) => {
          // console.log(entry);
          return <EntryCard entry={entry} />;
        })}
      </div>
    </>
  );
};

export default StoryList;
