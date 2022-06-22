import "./Add.css";

const AddNotes = ({
  addNoteHandler,
  inputNoteHandler,
  titleInput,
  bodyInput,
  status,
  titleInputLen,
}) => {
  document.title = "Notes | Add Page";
  const alertHandler = () => {
    if (status === 1)
      return (
        <div className="alert alert-success mb-3" role="alert">
          Successfully added!
        </div>
      );
    else if (status === -1)
      return (
        <div className="alert alert-danger mb-3" role="alert">
          Please fill in all fields!
        </div>
      );
  };

  return (
    <div className="container">
      <h1 className="add-notes-title">Add Notes</h1>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-5">
          <form onSubmit={addNoteHandler}>
            {alertHandler()}
            <div className="mb-3">
              <label htmlFor="add-title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="add-title"
                autoComplete="off"
                onChange={inputNoteHandler}
                value={titleInput}
              />
              {titleInputLen - titleInput.length < 10 ? (
                <p className="text-danger mt-2">
                  remaining characters {titleInputLen - titleInput.length}
                </p>
              ) : (
                <p className="text-warning mt-2">
                  remaining characters {titleInputLen - titleInput.length}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="add-body" className="form-label">
                Body
              </label>
              <textarea
                className="form-control"
                id="add-body"
                rows="3"
                onChange={inputNoteHandler}
                value={bodyInput}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;
