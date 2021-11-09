import Button from "../buttons/buttons";
import "./card.scss";

function Card() {
  return(
    <ul className="card-list">
      <li className="card-list__item">
        <Button className="btn__number">112</Button>
        <div className="card-list__wrapper">
          <h3 className="card-list__theme">Add tags for solutions</h3>
          <p className="card-list__text">Easier to search for solutions based on a specific stack.</p>
        <Button className="btn__hashtag">Enhancement</Button>
        </div>
        <span>2</span>
      </li>

      <li className="card-list__item">
        <Button className="btn__number">112</Button>
        <div className="card-list__wrapper">
          <h3 className="card-list__theme">Add tags for solutions</h3>
          <p className="card-list__text">Easier to search for solutions based on a specific stack.</p>
        <Button className="btn__hashtag">Enhancement</Button>
        </div>
        <span>2</span>
      </li>

      <li className="card-list__item">
        <Button className="btn__number">112</Button>
        <div className="card-list__wrapper">
          <h3 className="card-list__theme">Add tags for solutions</h3>
          <p className="card-list__text">Easier to search for solutions based on a specific stack.</p>
        <Button className="btn__hashtag">Enhancement</Button>
        </div>
        <span>2</span>
      </li>

      <li className="card-list__item">
        <Button className="btn__number">112</Button>
        <div className="card-list__wrapper">
          <h3 className="card-list__theme">Add tags for solutions</h3>
          <p className="card-list__text">Easier to search for solutions based on a specific stack.</p>
        <Button className="btn__hashtag">Enhancement</Button>
        </div>
        <span>2</span>
      </li>

      <li className="card-list__item">
        <Button className="btn__number">112</Button>
        <div className="card-list__wrapper">
          <h3 className="card-list__theme">Add tags for solutions</h3>
          <p className="card-list__text">Easier to search for solutions based on a specific stack.</p>
        <Button className="btn__hashtag">Enhancement</Button>
        </div>
        <span>2</span>
      </li>

      <li className="card-list__item">
        <Button className="btn__number">112</Button>
        <div className="card-list__wrapper">
          <h3 className="card-list__theme">Add tags for solutions</h3>
          <p className="card-list__text">Easier to search for solutions based on a specific stack.</p>
        <Button className="btn__hashtag">Enhancement</Button>
        </div>
        <span>2</span>
      </li>
    </ul>
  );
}

export default Card;