import React from "react";
import LayoutsContent from "../layouts/LayoutsContent";
import NoteCard from "./NoteCard";

const ArchivedNotes = ({
  initialData,
  formaterDate,
  onDelete,
  onUnArchived,
}) => {
  return (
    <LayoutsContent titleContent={"Arsip"} initialData={initialData}>
      {initialData.length > 0 ? (
        initialData.map((data) => (
          <NoteCard
            key={data.id}
            title={data.title}
            createdAt={formaterDate(data.createdAt)}
            body={data.body}
            id={data.id}
            onDelete={onDelete}
            onUnArchived={onUnArchived}
          />
        ))
      ) : (
        <span className="w-full justify-center flex opacity-50">
          Tidak ada catatan
        </span>
      )}
    </LayoutsContent>
  );
};

export default ArchivedNotes;
