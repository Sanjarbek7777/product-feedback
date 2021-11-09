import "./roadmap.scss";

function Roadmap() {
  return(
    <div className="roadmap">
      <div className="roadmap__wrapper">
        <h4 className="roadmap__heading">Roadmap</h4>
        <a className="roadmap__link" href="#">View</a>
      </div>
      <ul className="roadmap__list">
        <li className="roadmap__item">
          <p className="roadmap__text">Planned</p>
          <span className="roadmap__number">2</span>
        </li>
        <li className="roadmap__item">
          <p className="roadmap__text progress">In-Progress</p>
          <span className="roadmap__number">3</span>
        </li>
        <li className="roadmap__item">
          <p className="roadmap__text live">Live</p>
          <span className="roadmap__number">1</span>
        </li>
      </ul>
    </div>
  );
}

export default Roadmap;