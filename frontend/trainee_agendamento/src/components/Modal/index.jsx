import { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close()
    }
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={"modal-wrapper"}>
        <div onClick={close} className={"modal-backdrop"} />
        <div className={"modal-box"}>
          <div className="modal-header">
            <h1 className="title modal-title">{props.title}</h1>
            <div className="closeModal" onClick={close}>
              <IoCloseOutline className="close-button"/>
            </div>
          </div>
          {props.children}
        </div>
      </div>, document.getElementById("modal-root"))
  };

  return null;
});

export default Modal;