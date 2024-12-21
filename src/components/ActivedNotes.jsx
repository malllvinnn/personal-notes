import React from "react";
import ActivedNoteCard from "./ActivedNoteCard";
import LayoutsContent from "../layouts/LayoutsContent";

const ActivedNotes = ({ initialData, formaterDate, onDelete }) => {
  return (
    <LayoutsContent titleContent={"Catatan Aktif"}>
      {initialData.map((data) => (
        <ActivedNoteCard
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

export default ActivedNotes;
