import React from "react";
import ActivedNoteCard from "./ActivedNoteCard";
import LayoutsContent from "../layouts/LayoutsContent";

const ActivedNotes = ({
  initialData,
  formaterDate,
  onDelete,
  addNote,
  onSearchNote,
}) => {
  return (
    <LayoutsContent
      titleContent={"Catatan Aktif"}
      featureAdd={true}
      featureSeacrh={true}
      addNote={addNote}
      initialData={initialData}
      onSearchNote={onSearchNote}
    >
      {initialData.length > 0 ? (
        initialData.map((data) => (
          <ActivedNoteCard
            key={data.id}
            title={data.title}
            createdAt={formaterDate(data.createdAt)}
            body={data.body}
            id={data.id}
            onDelete={onDelete}
          />
        ))
      ) : (
        <span className="w-full justify-center flex">Tidak ada catatan</span>
      )}
    </LayoutsContent>
  );
};

export default ActivedNotes;
