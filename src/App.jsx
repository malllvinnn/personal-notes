import ActivedNotes from "./components/ActivedNotes";
import ArchivedNotes from "./components/ArchivedNotes";

import { useEffect, useState } from "react";
import { getInitialData, showFormattedDate } from "./utils/index";

import "./App.css";

function App() {
  const [initialData, setInitialData] = useState(getInitialData());
  const [filteredData, setFilteredData] = useState(initialData);

  const onDeleteHandler = (id) => {
    const data = initialData.filter((data) => data.id !== id);
    setInitialData(data);
    setFilteredData(data);
  };

  const onAddNoteHandler = (newData) => {
    const newNote = {
      id: +new Date(),
      title: newData.title,
      body: newData.body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    const newNoteData = [...initialData, newNote];

    setInitialData(newNoteData);
    setFilteredData(newNoteData);
  };

  const onSearchNoteHandler = (query) => {
    if (query.trim() === "") {
      setFilteredData(initialData);
    } else {
      const result = initialData.filter((data) =>
        data.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(result);
    }
  };

  const onArchivedNoteHandler = (id) => {
    const isData = initialData.map((data) =>
      data.id === id ? { ...data, archived: true } : data
    );
    setInitialData(isData);
    setFilteredData(isData);
  };

  const onUnArchivedNoteHandler = (id) => {
    const isData = initialData.map((data) =>
      data.id === id ? { ...data, archived: false } : data
    );
    setInitialData(isData);
    setFilteredData(isData);
  };

  return (
    <div className="flex flex-col gap-6">
      <ActivedNotes
        initialData={
          initialData.filter((data) => !data.archived) &&
          filteredData.filter((data) => !data.archived)
        }
        formaterDate={showFormattedDate}
        onDelete={onDeleteHandler}
        addNote={onAddNoteHandler}
        onSearchNote={onSearchNoteHandler}
        onArchived={onArchivedNoteHandler}
      />
      <ArchivedNotes
        initialData={initialData.filter((data) => data.archived)}
        formaterDate={showFormattedDate}
        onDelete={onDeleteHandler}
        onUnArchived={onUnArchivedNoteHandler}
      />
    </div>
  );
}

export default App;
