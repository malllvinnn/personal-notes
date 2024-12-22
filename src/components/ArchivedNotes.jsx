import React from "react";
import LayoutsContent from "../layouts/LayoutsContent";
import NoteCard from "./NoteCard";

const ArchivedNotes = ({ initialData, formaterDate, onDelete }) => {
  console.log(initialData);
  return (
    <LayoutsContent titleContent={"Arsip"} initialData={initialData}>
      {initialData.map((data) => (
        <NoteCard
          key={data.id}
          title={data.title}
          createdAt={formaterDate(data.createdAt)}
          body={data.body}
          id={data.id}
          onDelete={onDelete}
        />
      ))}
    </LayoutsContent>
  );
};

export default ArchivedNotes;
