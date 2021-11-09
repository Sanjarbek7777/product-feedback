import "./select.scss";

function Select({ className, option, ...props}) {
  return(
    <>
      <select className="select">
        <option className="select__option">Most Upvotes</option>
        <option className="select__option">Least Upvotes</option>
        <option className="select__option">Most Comments</option>
        <option className="select__option">Least Comments`</option>
      </select>
    </>
  );
}

export default Select;