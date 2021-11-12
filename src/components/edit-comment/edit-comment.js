import Button from "../buttons/buttons";
import "./edit-comment.scss";

function EditComment() {
  return(
    <>
    <div>
      <Button className="btn btn__back">Go Back</Button>
    </div>
      <form className="edit" action="#">
        <h2 className="edit__heading">Editing ‘Add a dark theme option’</h2>

        <div className="edit-input">
          <p className="edit-input__title">Feedback Title</p>
          <span className="edit-input__span">Add a short, descriptive headline</span>
          <input className="edit-input__input" type="text" name="text" placeholder="Please add a dark theme option" />
        </div>

        <div className="edit-category">
          <p className="edit-category__title">Category</p>
          <span className="edit-category__span">Choose a category for your feedback</span>
          <select className="edit-category__select" name="select">
            <option value="feature" selected>Feature</option>
            <option value="ui">UI</option>
            <option value="enhancement">Enhancement</option>
            <option value="ux">UX</option>
            <option value="bug">Bug</option>
          </select>
        </div>

        <div className="edit-status">
          <p className="edit-status__title">Update Status</p>
          <span className="edit-status__span">Change feedback state</span>
          <select className="edit-status__select" name="status">
            <option value="planned" selected>Planned</option>
            <option value="inprogress">In-Progress</option>
            <option value="live">Live</option>
          </select>
        </div>

        <div className="edit-detail">
          <p className="edit-detail__title">Feedback Detail</p>
          <span className="edit-detail__span">
            Include any specific comments on what should be improved, added, etc.
          </span>
          <textarea className="edit-detail__textarea" name="textarea"cols="50" rows="4"></textarea>
        </div>

        <div className="edit-btn">
          <button className="edit-btn__delete" type="reset">Delete</button>
          <button className="edit-btn__cansel" type="reset">Cancel</button>
          <Button className="btn btn__one">Save Changes</Button>
        </div>
      </form>
    </>
  );
}

export default EditComment;