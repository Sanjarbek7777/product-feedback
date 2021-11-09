import Button from "../buttons/buttons";
import "./hashtag.scss";



function Hashtags() {
  return(
    <div className="hashtags">
      <ul className="hashtags__list">
        <li className="hashtags__item">
            <Button className="btn__hashtag active">All</Button>
        </li>
        <li className="hashtags__item">
          <Button className="btn__hashtag">UI</Button>
        </li>
        <li className="hashtags__item">
          <Button className="btn__hashtag">UX</Button>
        </li>
        <li className="hashtags__item">
          <Button className="btn__hashtag">Enhancement</Button>
        </li>
        <li className="hashtags__item">
          <Button className="btn__hashtag">Bug</Button>
        </li>
        <li className="hashtags__item">
          <Button className="btn__hashtag">Feature</Button>
        </li>
      </ul>
    </div>
  );
}

export default Hashtags;