import React from 'react';

const Picture = (props) => {
	let { src, id, name, handleImgClick } = props;

	return (
		<div>
			<img alt={name} src={src} charid={id} onClick={handleImgClick} />
		</div>
	);
};

export default Picture;
