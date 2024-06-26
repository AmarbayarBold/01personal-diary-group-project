const EntryCard = ({ entry }) => {
  return (
    <>
      <div className="p-4 border rounded shadow hover:shadow-lg cursor-pointer">
        {entry.image && (
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full h-32 object-cover rounded"
          />
        )}
        <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
        <p className="text-gray-500 ">
          {new Date(entry.date).toLocaleDateString()}
        </p>
        <p className="mt-2 text-gray-700">{entry.content.slice(0, 100)}...</p>
      </div>
    </>
  );
};

export default EntryCard;
