import ActivedNotes from "./components/ActivedNotes";
import ArchivedNotes from "./components/ArchivedNotes";

import { useState } from "react";
import { getInitialData, showFormattedDate } from "./utils/index";

import "./App.css";

function App() {
  const [initialData, setInitialData] = useState(getInitialData());
  // const initialData = getInitialData();

  const onDeleteHandler = (id) => {
    const data = initialData.filter((data) => data.id !== id);
    setInitialData(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <ActivedNotes
        initialData={initialData}
        formaterDate={showFormattedDate}
        onDelete={onDeleteHandler}
      />

      <ArchivedNotes />
    </div>
  );
}

export default App;
