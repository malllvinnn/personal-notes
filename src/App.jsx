import ActivedNotes from "./components/ActivedNotes";
import ArchivedNotes from "./components/ArchivedNotes";

import { useState } from "react";
import { getInitialData, showFormattedDate } from "./utils/index";

import "./App.css";

function App() {
  const [initialData, setInitialData] = useState(getInitialData());

  const onDeleteHandler = (id) => {
    const data = initialData.filter((data) => data.id !== id);
    setInitialData(data);
  };

  const onAddNoteHandler = (newData) => {
    setInitialData([
      ...initialData,
      {
        id: +new Date(),
        title: newData.title,
        body: newData.body,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ]);
  };

  return (
    <div className="flex flex-col gap-6">
      <ActivedNotes
        initialData={initialData}
        formaterDate={showFormattedDate}
        onDelete={onDeleteHandler}
        addNote={onAddNoteHandler}
      />
      <ArchivedNotes />
    </div>
  );
}

export default App;
