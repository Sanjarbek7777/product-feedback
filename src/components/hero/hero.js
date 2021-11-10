import "./hero.scss";
import IMG from "../../assets/img/site-logo.svg";
import Select from "../select/select";
import Feedback from "../feedback/feedback";

function Hero() {
  return(
    <>
      <div className="hero">
        <img className="hero__img" src={IMG} alt="site logo" width="24" height="24" />
        <h3 className="hero__heading">6 Suggestions</h3>
        <Select />
        <Feedback />
      </div>
    </>
  );
}

export default Hero;