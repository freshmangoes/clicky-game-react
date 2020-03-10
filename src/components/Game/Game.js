import React from 'react';
import imgs from "../../imgs.json";
import Picture from '../Picture/';

const Game = () => {

	return (
		<div className="container-fluid">
      {imgs.map(img => {
        return (
          <Picture
            key={img.id}
            href={img.href}
            name={img.name}
          />
        )
      })}
		</div>
	);
};

export default Game;
