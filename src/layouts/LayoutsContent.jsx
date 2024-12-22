import React from "react";
import AddNotes from "../components/AddNotes";

const LayoutsContent = ({
  titleContent,
  children,
  featureAdd = false,
  addNote,
  initialData = [],
}) => {
  return (
    <div className="bg-slate-800">
      <div className="flex justify-between">
        <h1 className="text-2xl">{titleContent}</h1>
        {featureAdd && <AddNotes addNote={addNote} />}
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
