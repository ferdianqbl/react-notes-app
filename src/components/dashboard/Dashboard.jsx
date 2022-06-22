import "./Dashboard.css";
import DeleteBtn from "./note-delete-btn.svg";
import BookmarkBtn from "./note-bookmark-btn.svg";

const Dashboard = ({ notes, formattedData, deleteNoteHandler }) => {
  document.title = "Notes | Dashboard";
  return (
    <div className="container">
      <h1 className="dashboard-title mb-5">Dashboard</h1>
      {notes.length > 0 ? (
        notes.map((note) => (
          <div
            key={note.id}
            className="row justify-content-center align-items-center mb-5 dashboard-card"
          >
            <div className="col-md-3">
              <img
                src="images/nonBookmark.jpg"
                alt="note-img"
                className="img-fluid"
              />
            </div>
            <div className="col-md-7 py-3 align-self-start">
              <p className="dashboard-card__note-title p-0 mb-0">
                {note.title}
              </p>
              <p className="dashboard-card__note-date mb-3 p-0">
                {formattedData(note.createdAt)}
              </p>
              <p className="dashboard-card__note-body">{note.body}</p>
              <div className="dashboard-card__button">
                <button type="button" className="btn note-delete-btn p-0 m-0">
                  <img
                    src={DeleteBtn}
                    alt="note-delete-btn"
                    onClick={() => deleteNoteHandler(note.id)}
                  />
                </button>
                <button
                  type="button"
                  className="btn note-bookmarks-btn p-0 m-0"
                >
                  <img src={BookmarkBtn} alt="note-bookmark-btn" />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5">
            <div className="alert alert-danger mb-3" role="alert">
              You don't have any notes yet.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
