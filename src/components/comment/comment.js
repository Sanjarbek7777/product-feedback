import "./comment.scss";
import Moss from "../../assets/img/elijah-moss.png";
import James from "../../assets/img/james-skinner.png";
import Anne from "../../assets/img/anne.png";
import Ryan from "../../assets/img/ryan.png";

function Comment() {
  return(
    <>
      <div className="comment">
        <h3 className="comment__heading">4 Comments</h3>
        <ul className="comment-list">
          <li className="comment-list__item first-item">
            <div className="comment-list__wrapper">
              <div className="comment-list__inner">
                <img className="comment-list__img" src={Moss} alt="author" width="40" height="40" />
                <div className="comment-list__div">
                <h4 className="comment-list__author">Elijah Moss</h4>
                <a className="comment-list__link" href="#">@hexagon.bestagon</a>
              </div>
              </div>
              <a className="comment-list__reply" href="#">Reply</a>
            </div>
            <p className="comment-list__text">
              Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
            </p>
          </li>

          <li className="comment-list__item">
            <div className="comment-list__wrapper">
              <div className="comment-list__inner">
                <img className="comment-list__img" src={James} alt="author" width="40" height="40" />
                <div className="comment-list__div">
                <h4 className="comment-list__author">James Skinner</h4>
                <a className="comment-list__link" href="#">@hummingbird1</a>
              </div>
              </div>
              <a className="comment-list__reply" href="#">Reply</a>
            </div>
            <p className="comment-list__text">
               Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.
            </p>
          </li>

          <li className="comment-list__item reply">
            <div className="comment-list__wrapper">
              <div className="comment-list__inner">
                <img className="comment-list__img" src={Anne} alt="author" width="40" height="40" />
                <div className="comment-list__div">
                <h4 className="comment-list__author">Anne Valentine</h4>
                <a className="comment-list__link" href="#">@annev1990</a>
              </div>
              </div>
              <a className="comment-list__reply" href="#">Reply</a>
            </div>
            <p className="comment-list__text">
              <span className="comment-list__replied">@hummingbird1</span>  While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.
            </p>
          </li>

          <li className="comment-list__item reply">
            <div className="comment-list__wrapper">
              <div className="comment-list__inner">
                <img className="comment-list__img" src={Ryan} alt="author" width="40" height="40" />
                <div className="comment-list__div">
                <h4 className="comment-list__author">Ryan Welles</h4>
                <a className="comment-list__link" href="#">@voyager.344</a>
              </div>
              </div>
              <a className="comment-list__reply" href="#">Reply</a>
            </div>
            <p className="comment-list__text">
              <span className="comment-list__replied">@annev1990</span>  Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Comment;