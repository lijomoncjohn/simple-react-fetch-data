import React from 'react';

import './RoundImage.css';

const RoundImage = props => {
  return (
    <div className={`round-image ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default RoundImage;
