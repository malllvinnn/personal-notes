import React from "react";
import AddNotes from "../components/AddNotes";
import SearchNotes from "../components/SearchNotes";

const LayoutsContent = ({
  titleContent,
  children,
  featureAdd = false,
  featureSeacrh = false,
  addNote,
  onSearchNote,
  initialData = [],
}) => {
  return (
    <div className="bg-slate-800">
      <div className="flex justify-between">
        <h1 className="text-2xl">{titleContent}</h1>
        <div className="flex items-center gap-4">
          {featureSeacrh && <SearchNotes onSearchNote={onSearchNote} />}
          {featureAdd && <AddNotes addNote={addNote} />}
        </div>
      </div>
      <div
        className={`grid gap-2 mt-4 ${
          initialData.length > 0 ? "grid-cols-4" : "grid-cols-1"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutsContent;
