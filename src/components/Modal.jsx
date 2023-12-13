import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

function Modal(props) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
    // navigate('..');
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}>
        {/* children is a reserve name for content between tag of custom componenet */}
      </div>
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
