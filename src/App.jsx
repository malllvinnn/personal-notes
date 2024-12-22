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

  const isActivedInitData = initialData.filter(
    (data) => data.archived === false
  );

  const isActivedFilteredData = filteredData.filter(
    (data) => data.archived === false
  );

  const activedData = isActivedInitData && isActivedFilteredData;

  const archivedInitData = initialData.filter((data) => data.archived === true);

  return (
    <div className="flex flex-col gap-6">
      <ActivedNotes
        initialData={activedData}
        formaterDate={showFormattedDate}
        onDelete={onDeleteHandler}
        addNote={onAddNoteHandler}
        onSearchNote={onSearchNoteHandler}
      />
      <ArchivedNotes
        initialData={archivedInitData}
        formaterDate={showFormattedDate}
        onDelete={onDeleteHandler}
      />
    </div>
  );
}

export default App;
