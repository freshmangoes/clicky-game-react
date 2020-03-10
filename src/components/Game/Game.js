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

	// TODO test this thing
	// presumably shuffles images
	const shuffleArray = (array) => {
		const imgArray = array;
		console.log('clicked');
		for (let i = 0; i < imgArray.length; i++) {
			let index = Math.floor(Math.random() * i);
			let temp = imgArray[i];
			imgArray[i] = imgArray[index];
			imgArray[index] = temp;
		}
		setImgs(imgArray);
		console.log('imgs', imgs);
  };
  
  // click handler
  const handleImgClick = () => {
    shuffleArray(imgs);
  }

  // NOTE debug
  console.log('rendering');

	return (
		<div className="container-fluid">
			<div className="col">
				<div className="row d-flex">
          {/* NOTE Might have to place this bit in another component? */}
					{imgs.map((img) => {
						return (
							<Picture
								key={img.id}
								src={img.src}
								name={img.name}
								handleImgClick={handleImgClick}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Game;
