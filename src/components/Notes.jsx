import { Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import AddNotes from "./addNotes/AddNotes";
import Dashboard from "./dashboard/Dashboard";
import { getInitialData, showFormattedDate } from "../utils/dashboardData";
import { useState } from "react";
import Bookmark from "./bookmark/Bookmark";

const Notes = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [status, setStatus] = useState(0);

  const addNoteHandler = (e) => {
    e.preventDefault();
    if (titleInput && bodyInput) {
      const newNote = {
        id: +new Date(),
        title: titleInput,
        body: bodyInput,
        archived: false,
        createdAt: Date.now(),
      };
      setNotes([...notes, newNote]);
      setStatus(1);
    } else setStatus(-1);

    setTimeout(() => {
      setStatus(0);
    }, 2000);
    setTitleInput("");
    setBodyInput("");
  };

  const inputNoteHandler = (e) => {
    if (e.target.id === "add-title" && e.target.value.length <= 50)
      setTitleInput(e.target.value);
    else if (e.target.id === "add-body") setBodyInput(e.target.value);
  };

  const deleteNoteHandler = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              notes={notes}
              formattedData={showFormattedDate}
              deleteNoteHandler={deleteNoteHandler}
            />
          }
        />
        <Route
          path="/add"
          element={
            <AddNotes
              addNoteHandler={addNoteHandler}
              inputNoteHandler={inputNoteHandler}
              titleInput={titleInput}
              bodyInput={bodyInput}
              status={status}
              titleInputLen={50}
            />
          }
        />
        <Route path="bookmark" element={<Bookmark />} />
      </Routes>
    </>
  );
};

export default Notes;
