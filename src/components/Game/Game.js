import React, { useState } from 'react';
import Images from '../Images/';
import Picture from '../Picture/';

const Game = () => {
  // state for imgs array
  const [imgs, setImgs] = useState(Images);

  // state for array of clicked imgs
  const [clicked, setClicked] = useState({});

  // state for score
  const [score, setScore] = useState(0);

  console.log('imgs', imgs);
  console.log('clicked', clicked);
  console.log('score', score);

	return (
		<div className="container-fluid">
			<div className="col">
				<div className="row d-flex">
					{imgs.map((img) => {
						return <Picture key={img.id} href={img.href} name={img.name} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Game;
