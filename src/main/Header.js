import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="navbar">
			<div className="navbar-logo">Han Ju-Seung</div>
			<nav className="navbar-menu">
				<Link to="/">Home</Link>
				<Link to="/project1">Project1</Link>
				<Link to="/project2">Project2</Link>
				<Link to="/project3">Project3</Link>
			</nav>
		</header>
	)
}

export default Header;