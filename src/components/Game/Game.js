import React, { useState } from 'react';
import Pictures from '../Pictures';

const Game = () => {
	// NOTE debug
	console.log('rendering');

	return (
		<div className="container-fluid">
			<div className="col">
				<div className="row d-flex">
          <Pictures />
				</div>
			</div>
		</div>
	);
};

export default Game;
