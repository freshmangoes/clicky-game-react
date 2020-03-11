import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand bg-light mb-2">
			<div className="col">
				<div className="row">
					<ul className="navbar-nav">
						<li className="nav-item navbar-brand">
							<a href="/">Reset</a>
						</li>
						<li className="navbar-text">Click an image to begin!</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
