import React from "react";

function PDF({ src, title }) {
  return (
    <>
      <div style={{ width: "100%", height: "80vh", overflow: "hidden" }}>
        <iframe
          src={src}
          title={title}
          width="100%"
          style={{ border: "none", width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
}

export default PDF;
