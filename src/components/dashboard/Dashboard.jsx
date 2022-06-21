import "./Dashboard.css";
import DeleteBtn from "./note-delete-btn.svg";

const Dashboard = ({ getData, formattedData }) => {
  const initialData = getData();

  return (
    <div className="container">
      <h1 className="dashboard-title mb-5">Dashboard</h1>
      {initialData.map((data) => (
        <div className="row justify-content-center align-items-start mb-5 dashboard-card">
          <div className="col-md-2">
            <img
              src="images/nonBookmark.jpg"
              alt="note-img"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <p className="dashboard-card__note-title p-0 mb-0">{data.title}</p>
            <p className="dashboard-card__note-date mb-3 p-0">
              {formattedData(data.createdAt)}
            </p>
            <p className="dashboard-card__note-body">{data.body}</p>
            <div className="dashboard-card__button">
              <button type="button" className="btn note-delete-btn ">
                <img src={DeleteBtn} alt="note-delete-btn" />
              </button>
              <button type="button" className="btn note-bookmarks-btn">
                <img src={DeleteBtn} alt="note-bookmark-btn" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
