import "./App.scss";
import "./assets/scss/main.scss";
import Button from "./components/buttons/buttons";
import Edit from "./components/edit-feedback/edit-feedback";
import Comment from "./components/comment/comment";
// import Mentor from "./components/mentor/mentor";
// import Hashtags from "./components/hashtag/hashtag";
// import Roadmap from "./components/roadmap/roadmap";
// import Hero from "./components/hero/hero";
import Card from "./components/card/card";
import AddComment from "./components/add-comment/add-comment";
// import Add from "./components/add-feddback/add-feedback";

function App() {
  return (
    <>
      <div className="container">
        {/* <div className="wrapper">
          <div className="left-content">
            <Mentor />

            <Hashtags />

            <Roadmap />
          </div>
          <div className="right-content">
            <Hero />

            <Add />

            <Card />
          </div>
        </div> */}

        <div className="feedback-container">
          <div className="wrap">
            <Button className="btn__back">Go back</Button>

             <Edit />
          </div>
          <div>
           < Card />
          </div>
          <div>
            <Comment />
          </div>
          <div>
            <AddComment />
          </div>
        </div>
        </div>
    </>
  );
}

export default App;
