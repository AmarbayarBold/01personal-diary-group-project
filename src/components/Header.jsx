const Header = ({ onAddClick }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Personal Dairy</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={onAddClick}
        >
          Add Entry
        </button>
      </div>
    </>
  );
};

export default Header;
