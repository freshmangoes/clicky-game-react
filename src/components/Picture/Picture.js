import React from 'react';

const Picture = (props) => {
  let { src, id, name } = props;
    
	return (
		<div>
			<img alt={name} src={src} charid={id} onClick={props.handleImgClick} />
		</div>
	);
};

export default Picture;
