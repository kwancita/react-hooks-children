import React from "react";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    //outer div refer to the parent div 
    //the parent have been set to textPosition but not requried but with direction

    //inner div refer to the childrent, set direction and contentPosition as default
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}
      
      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
