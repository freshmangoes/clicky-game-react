import React, { Component } from 'react';
import Images from '../Images';
import PictureCard from '../PictureCard';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import Wrapper from '../Wrapper';

class Game extends Component {
	state = {
		imgs: Images,
		score: 0,
		clicked: []
	};

	shuffleArray = (array) => {
		// takes in array of images
		const result = array;
		// NOTE debug
		console.log('clicked');
		// loops through array and assigns a random index to each
		for (let i = 0; i < result.length; i++) {
			let index = Math.floor(Math.random() * i);
			// swapping indicies
			let temp = result[i];
			result[i] = result[index];
			result[index] = temp;
		}
		return result;
	};

	addClickedImg = (name) => {
		const result = this.state.clicked;
		result.push(name);
		return result;
	};

	handleClick = (event) => {
		// sets imgs using shuffleArray
		const name = event.target.name;
		let newScore, newClickedArray;

		const newImgArray = this.shuffleArray(this.state.imgs);

		if (this.state.clicked.includes(name)) {
			console.log('resetting');
			newScore = 0;
			newClickedArray = [];
		} else {
			newClickedArray = this.addClickedImg(name);
			newScore = this.state.score + 1;
		}

		const newState = {
			imgs: newImgArray,
			clicked: newClickedArray,
			score: newScore
		};
		this.setState(newState);
		console.log('this.state', this.state);
	};

	render() {
		const imgs = this.state.imgs;
		return (
			<Wrapper>
        <div className="row">
          <div className="col">
            <Navbar />
            <div className="container-fluid">
              <Jumbotron score={this.state.score} />
              <div className="col">
                <div className="row d-flex justify-content-center">
                  {imgs.map((img) => {
                    return (
                      <PictureCard
                        src={img.src}
                        name={img.name}
                        key={img.id}
                        handleClick={(e) => this.handleClick(e)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
			</Wrapper>
		);
	}
}

export default Game;
