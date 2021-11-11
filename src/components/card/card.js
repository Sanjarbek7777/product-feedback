import Button from "../buttons/buttons";
import "./card.scss";

function Card() {
  return(
    <div className="card">
      <ul className="card-list">
        <li className="card-list__item">
          <Button className="btn__number" type="button">112</Button>
          <div className="card-list__wrapper">
            <h3 className="card-list__theme">Add tags for solutions</h3>
            <p className="card-list__text">Easier to search for solutions based on a specific stack.</p>
          <Button className="card-list__btn btn__hashtag" type="button">Enhancement</Button>
          </div>
          <span className="card-list__number">2</span>
        </li>

        {/* <li className="card-list__item">
          <Button className="btn__number" type="button">99</Button>
          <div className="card-list__wrapper">
            <h3 className="card-list__theme">Add a dark theme option</h3>
            <p className="card-list__text">It would help people with light sensitivities and who prefer dark mode.</p>
          <Button className="card-list__btn btn__hashtag" type="button">Feature</Button>
          </div>
          <span className="card-list__number">4</span>
        </li>

        <li className="card-list__item">
          <Button className="btn__number" type="button">65</Button>
          <div className="card-list__wrapper">
            <h3 className="card-list__theme">Q&A within the challenge hubs</h3>
            <p className="card-list__text">Challenge-specific Q&A would make for easy reference.</p>
          <Button className="card-list__btn btn__hashtag" type="button">Feature</Button>
          </div>
          <span className="card-list__number">1</span>
        </li>

        <li className="card-list__item">
          <Button className="btn__number" type="button">51</Button>
          <div className="card-list__wrapper">
            <h3 className="card-list__theme">Allow image/video upload</h3>
            <p className="card-list__text">Images and screencasts can enhance comments on solutions.</p>
          <Button className="card-list__btn btn__hashtag" type="button">Enhancement</Button>
          </div>
          <span className="card-list__number">2</span>
        </li>

        <li className="card-list__item">
          <Button className="btn__number" type="button">42</Button>
          <div className="card-list__wrapper">
            <h3 className="card-list__theme">Ability to follow others</h3>
            <p className="card-list__text">Stay updated on comments and solutions other people post.</p>
          <Button className="card-list__btn btn__hashtag" type="button">Feature</Button>
          </div>
          <span className="card-list__number">3</span>
        </li>

        <li className="card-list__item">
          <Button className="btn__number" type="button">3</Button>
          <div className="card-list__wrapper">
            <h3 className="card-list__theme">Preview images not loading</h3>
            <p className="card-list__text">Challenge preview images are missing when you apply a filter.</p>
          <Button className="card-list__btn btn__hashtag" type="button">Bug</Button>
          </div>
          <span className="card-list__number">0</span>
        </li> */}
      </ul>
    </div>
  );
}

export default Card;