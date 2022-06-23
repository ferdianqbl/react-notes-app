import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getInitialData, showFormattedDate } from "../utils/dashboardData";
import Nav from "./nav/Nav";
import AddNotes from "./addNotes/AddNotes";
import Dashboard from "./dashboard/Dashboard";
import Bookmarks from "./bookmarks/Bookmarks";

const Notes = () => {
  const notes = getInitialData();
  const [notBookmarks, setNotBookmarks] = useState(
    notes.filter((note) => note.archived === false)
  );
  const [bookmarks, setBookmarks] = useState(
    notes.filter((note) => note.archived === true)
  );
  const [notBookmarksFilteredNotes, setNotBookmarksFilteredNotes] = useState(
    []
  );
  const [bookmarksFilteredNotes, setBookmarksFilteredNotes] = useState([]);
  const [search, setSearch] = useState("");
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
      setNotBookmarks([...notBookmarks, newNote]);
      setNotBookmarksFilteredNotes([]);
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

  const deleteNoteHandler = (id, isArchived) => {
    if (isArchived) {
      setBookmarks(bookmarks.filter((note) => note.id !== id));
      setBookmarksFilteredNotes([]);
    } else {
      setNotBookmarks(notBookmarks.filter((note) => note.id !== id));
      setNotBookmarksFilteredNotes([]);
    }
  };

  const bookmarksHandler = (id, isArchived) => {
    if (isArchived) {
      const note = bookmarks.find((note) => note.id === id);
      note.archived = false;

      setBookmarks(bookmarks.filter((note) => note.id !== id));
      setNotBookmarks([...notBookmarks, note]);
    } else {
      const note = notBookmarks.find((note) => note.id === id);
      note.archived = true;

      setNotBookmarks(notBookmarks.filter((note) => note.id !== id));
      setBookmarks([...bookmarks, note]);
    }
    setBookmarksFilteredNotes([]);
    setNotBookmarksFilteredNotes([]);
  };

  const notBookmarkSearchHandler = (e) => {
    setSearch(e.target.value);

    const filteredNotes = notBookmarks.filter((note) => {
      const title = note.title.toLowerCase();
      return new RegExp(e.target.value.toLowerCase(), "i").exec(title);
    });
    setNotBookmarksFilteredNotes(filteredNotes);
    setBookmarksFilteredNotes([]);
  };

  const bookmarkSearchHandler = (e) => {
    setSearch(e.target.value);

    const filteredNotes = bookmarks.filter((note) => {
      const title = note.title.toLowerCase();
      return new RegExp(e.target.value.toLowerCase(), "i").exec(title);
    });
    setBookmarksFilteredNotes(filteredNotes);
    setNotBookmarksFilteredNotes([]);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              notes={notBookmarks}
              search={search}
              filteredNotes={notBookmarksFilteredNotes}
              searchHandler={notBookmarkSearchHandler}
              formattedData={showFormattedDate}
              deleteNoteHandler={deleteNoteHandler}
              bookmarksHandler={bookmarksHandler}
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
        <Route
          path="bookmark"
          element={
            <Bookmarks
              notes={bookmarks}
              search={search}
              filteredNotes={bookmarksFilteredNotes}
              searchHandler={bookmarkSearchHandler}
              formattedData={showFormattedDate}
              deleteNoteHandler={deleteNoteHandler}
              bookmarksHandler={bookmarksHandler}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Notes;
