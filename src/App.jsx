import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Entries from "./components/Entries";
import StoryList from "./components/StoryList";

function App() {
  const [dailyEntries, setDailyEntries] = useState([]);
  const [showAddModel, setShowAddModel] = useState(false);

  const addEntries = (entry) => {
    // console.log(typeof entry.date);
    if (
      dailyEntries.some(
        (e) =>
          new Date(e.date).toDateString() ===
          new Date(entry.date).toDateString()
      )
    ) {
      alert("You have already entered");
      return;
    }
    setDailyEntries([entry, ...dailyEntries]);
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <Header onAddClick={() => setShowAddModel(true)} />
        <StoryList entries={dailyEntries} />
        {showAddModel && (
          <Entries onClose={() => setShowAddModel(false)} onSave={addEntries} />
        )}
      </div>
    </>
  );
}

export default App;
