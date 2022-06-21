import { Link } from "react-router-dom";

const HomeButton = () => (
  <div className="home-button">
    <Link to="/notes">Start Now</Link>
  </div>
);

export default HomeButton;
