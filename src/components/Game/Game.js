import React, { useState } from 'react';
import PictureContainer from '../PictureContainer'

const Game = () => {
	// NOTE debug
	console.log('rendering');

	return (
		<div className="container-fluid">
			<div className="col">
				<div className="row d-flex">
          <PictureContainer />
				</div>
			</div>
		</div>
	);
};

export default Game;
