import Button from "../buttons/buttons";
import "./add-comment.scss";

function AddComment() {
  return(
    <>
      <div className="add-comment">
        <h3 className="add-comment__heading">Add Comment</h3>
        <form className="add-comment__form" action="#">
          <input className="add-comment__input" type="text" name="add-comment" placeholder="Type your comment here" />
        </form>
        <div className="add-comment__wrapper">
          <p className="add-comment__text">250 Characters left</p>
          <Button className="btn btn__one" type="button">Post Comment</Button>
        </div>
      </div>
    </>
  );
}

export default AddComment;