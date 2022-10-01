// import { Fragment } from "react";
// import ReactDOM from "react-dom";

// // import classes from "./Modal.module.css";

// const Backdrop = (props) => {
//   return (
//     <div
//       className="opacity-25 fixed inset-0 z-10 bg-black"
//       onClick={props.onCancel}
//     />
//   );
// };

// const ModalOverlay = (props) => {
//   return (
//     <div
//       id="defaultModal"
//       tabindex="-1"
//       aria-hidden="true"
//       className=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-lg py-8  "
//     >
//       <div className="relative w-auto py-2 mx-auto max-w-3xl bg-white-100  rounded-lg shadow">
//         {props.children}
//       </div>
//     </div>
//   );
// };

// const portalElement = document.getElementById("overlays");

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(
//         <Backdrop onCancel={props.onCancel} />,
//         portalElement
//       )}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;

import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCancel} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
