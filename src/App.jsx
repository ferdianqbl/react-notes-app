import "./styles/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Home from "./homePage/Home";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-notes-app" element={<Home />} />
        <Route path="/react-notes-app/dashboard/*" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
