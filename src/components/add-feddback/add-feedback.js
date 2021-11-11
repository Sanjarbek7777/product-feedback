import "./add-feedback.scss";
import Feedback from "../feedback/feedback";
import Image from "../../assets/img/people-image.svg";

function Add() {
  return(
    <div className="card-add">
      <div className="card-add__wrapper">
        <img src={Image} alt="image" width="129" height="136" />
        <h3 className="card-add__heading">There is no feedback yet.</h3>
        <p className="card-add__text">
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
        </p>
        <Feedback />
      </div>
    </div>
  );
}

export default Add;