import React from 'react';

const PictureCard = (props) => {
	let { src, name, handleClick } = props;
	return (
		<div>
			<img src={src} alt={name} onClick={handleClick} name={name} />
		</div>
	);
};

export default PictureCard;
