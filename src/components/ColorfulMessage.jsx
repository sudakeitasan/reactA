import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    //color: props.color,
    color,
    fontSize: "18px"
  };
  //return <p style={contentStyle}>{props.message}</p>;
  //return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
