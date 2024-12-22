import React from "react";

const NoteCard = ({ id, title, createdAt, body, onDelete, onArchived }) => {
  return (
    <div className="px-2 pt-2 pb-4 border-2 border-accent/70 rounded-lg flex flex-col gap-3 justify-between">
      <div>
        <h3 className="text-lg font-bold ">{title}</h3>
        <span className="text-xs opacity-40">{createdAt}</span>
        <p className="text-sm">{body}</p>
      </div>
      <div className="font-semibold flex gap-2">
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 px-2 py-1 rounded-sm hover:text-light"
        >
          Delete
        </button>
        <button
          onClick={() => onArchived(id)}
          className="bg-orange-500 px-2 py-1 rounded-sm hover:text-light"
        >
          Arsipkan
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
