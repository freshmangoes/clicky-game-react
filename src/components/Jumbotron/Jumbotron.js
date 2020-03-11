import React from 'react';

const Jumbotron = (props) => {
	return (
		<div className="row">
			<div className="col">
				<div className="jumbotron text-center">
					<h1>Clicky Game!</h1>
					<h5>
						Click on an image to earn points, but don't click on any more than
						once!
					</h5>
					<h5>Score: {props.score}</h5>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
