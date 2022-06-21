import Logo from "./home-img.svg";
import HomeButton from "./HomeButton";
import "./styles.css";

const Home = () => {
  return (
    <div className="container home">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <img src={Logo} alt="home-img" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="home-title mb-3">
            Forget Notes Problem, <span>Start</span> Using <span>NoteIO</span>
          </h1>
          <p className="home-desc mb-5">
            We will help all your notes. Add, edit, delete, and bookmark your
            favorite notes with us. <span>NoteIO</span> is the best note
            management app
          </p>
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
              <HomeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
