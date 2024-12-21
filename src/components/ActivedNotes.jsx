import React from "react";
import ActivedNoteCard from "./ActivedNoteCard";

const ActivedNotes = ({ initialData, formaterDate }) => {
  return (
    <div>
      <h1 className="text-2xl">Catatan Aktif</h1>
      <div className="bg-slate-800 grid grid-cols-4 gap-2 mt-4">
        {initialData.map((data) => (
          <ActivedNoteCard
            key={data.id}
            title={data.title}
            createdAt={formaterDate(data.createdAt)}
            body={data.body}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivedNotes;
