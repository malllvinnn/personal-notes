import React from "react";

const LayoutsContent = ({ titleContent, children }) => {
  return (
    <div className="bg-slate-800">
      <h1 className="text-2xl">{titleContent}</h1>
      <div className="grid grid-cols-4 gap-2 mt-4">{children}</div>
    </div>
  );
};

export default LayoutsContent;
