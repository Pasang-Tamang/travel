import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
