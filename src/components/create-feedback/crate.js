import "./create.scss";
import Button from "../buttons/buttons";

function Create() {
  return(
    <>
    <div className="btn-wrapper">
      <Button className="btn btn__back" type="button">Go Back</Button>
    </div>
    <form className="create" action="#">
      <h2 className="create__heading">Create New Feedback</h2>
      <div className="create-input">
        <p className="create-input__title">Feedback Title</p>
        <span className="create-input__span">Add a short, descriptive headline</span>
        <input className="create-input__input" type="text" name="text" aria-label="input text" />
      </div>

      <div className="create-select">
        <p className="create-select__title">Category</p>
        <span className="create-select__span">Choose a category for your feedback</span>
        <select className="create-select__select" name="select">
          <option value="feature" selected>Feature</option>
          <option value="ui">UI</option>
          <option value="enhancement">Enhancement</option>
          <option value="ux">UX</option>
          <option value="bug">Bug</option>
        </select>
      </div>

      <div className="create-textarea">
        <p className="create-textarea__title">Feedback Detail</p>
        <span className="create-textarea__span">
          Include any specific comments on what should be improved, added, etc.
        </span>
        <textarea className="create-textarea__textarea" name="textatea" cols="50" rows="4"></textarea>
      </div>

      <div className="create-btn">
        <button className="create-btn__reset" type="reset">Cancel</button>
        <Button className="btn btn__one" type="submit">Add Feedback</Button>
      </div>
    </form>
    </>
  );
}

export default Create;