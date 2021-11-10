import "./App.scss";
import "./assets/scss/main.scss";
import Mentor from "./components/mentor/mentor";
import Hashtags from "./components/hashtag/hashtag";
import Roadmap from "./components/roadmap/roadmap";
import Hero from "./components/hero/hero";
import Card from "./components/card/card";
import Add from "./components/add-feddback/add-feedback";

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="left-content">
            <Mentor />

            <Hashtags />

            <Roadmap />
          </div>
          <div className="right-content">
            <Hero />

            <Add />

            {/* <Card /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
