import { Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import AddNotes from "./addNotes/AddNotes";
import Dashboard from "./dashboard/Dashboard";
import { getInitialData, showFormattedDate } from "../utils/dashboardData";

const Notes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              getData={getInitialData}
              formattedData={showFormattedDate}
            />
          }
        />
        <Route path="/add" element={<AddNotes />} />
      </Routes>
    </>
  );
};

export default Notes;
