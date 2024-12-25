import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClick: () => void;
}

function Alert({ children, onClick }: props) {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {" "}
      {children}{" "}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
}

export default Alert;
