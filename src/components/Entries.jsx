import { useState } from "react";

const Entries = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const handleSave = () => {
    if (title && date && content) {
      const newEntry = { title, date, image, content };
      onSave(newEntry);
      onClose();
    } else {
      alert("please fill all required fields");
    }
  };
  // console.log({ title, date, image, content });
  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Add new entry</h2>
          <div className="mb-4">
            <label className="block mb-2">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-full p-2 border rounded"
              required
              placeholder="Please enter your title"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="w-full p-2 border rounded"
              required
              placeholder="Please enter your date"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Image URL (optional)</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="url"
              className="w-full p-2 border rounded"
              placeholder="Please enter your image"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 rounded border"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-gray-300 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entries;
