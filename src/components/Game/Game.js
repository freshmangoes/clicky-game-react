import React, { useState } from 'react';
import Images from '../Images/';
import Picture from '../Picture/';

const Game = () => {
  // state for imgs array
  const [imgs, setImgs] = useState(Images);

  // state for score
  const [score, setScore] = useState(0);

  console.log('imgs', imgs);
  console.log('score', score);

	return (
		<div className="container-fluid">
			<div className="col">
				<div className="row d-flex">
					{imgs.map((img) => {
						return <Picture key={img.id} src={img.src} name={img.name}/>;
					})}
				</div>
			</div>
		</div>
	);
};

export default Game;
