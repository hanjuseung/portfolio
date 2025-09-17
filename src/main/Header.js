import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="navbar">
			<div className="navbar-logo">Han Ju-Seung</div>
			<nav className="navbar-menu">
				<Link to="/">Home</Link>
				<Link to="/project1">Funders</Link>
				<Link to="/project2">Scout</Link>
				<Link to="/project3">PowerUp</Link>
			</nav>
		</header>
	)
}

export default Header;