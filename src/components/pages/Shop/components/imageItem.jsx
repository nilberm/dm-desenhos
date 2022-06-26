import React from "react";

const ImageItem = (props) => {
  return <img id="imgItem" src={props.source} alt={props.alt} />;
};

export default ImageItem;
