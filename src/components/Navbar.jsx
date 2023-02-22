import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
	return (
		<nav className='Navbar'>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/contact-me'>Contact Me</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
