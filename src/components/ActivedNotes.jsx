import React from "react";
import NoteCard from "./NoteCard";
import LayoutsContent from "../layouts/LayoutsContent";

const ActivedNotes = ({
  initialData,
  formaterDate,
  onDelete,
  addNote,
  onSearchNote,
  onArchived,
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
          <NoteCard
            key={data.id}
            title={data.title}
            createdAt={formaterDate(data.createdAt)}
            body={data.body}
            id={data.id}
            onDelete={onDelete}
            onArchived={onArchived}
          />
        ))
      ) : (
        <span className="w-full justify-center flex">Tidak ada catatan</span>
      )}
    </LayoutsContent>
  );
};

export default ActivedNotes;
