import React from 'react';
import './styles.css';
const PictureCard = (props) => {
	let { src, name, handleClick } = props;
	return (
		<div>
      <button className="btn m-4 bg-dark rounded shadow-md">
        <img
          src={src}
          alt={name}
          onClick={handleClick}
          name={name}
          className="m-1"
        />
      </button>
		</div>
	);
};

export default PictureCard;
