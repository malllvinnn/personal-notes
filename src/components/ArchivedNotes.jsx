import React from "react";
import LayoutsContent from "../layouts/LayoutsContent";

const ArchivedNotes = ({ initialData }) => {
  console.log(initialData);
  return (
    <LayoutsContent titleContent={"Arsip"}>
      {initialData.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
        </div>
      ))}
    </LayoutsContent>
  );
};

export default ArchivedNotes;
