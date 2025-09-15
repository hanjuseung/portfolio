import React from "react";
import "./Header.css";

function Header() {
	return(
	<header className="navbar">
		<div className="navbar-logo">Han Ju-Seung</div>
		<nav className="navbar-menu">
			<a href="/portfolio">Home</a>
			<a href="/project1">Project1</a>
			<a href="/project2">Project2</a>
			<a href="/project3">Project3</a>
		</nav>
	</header>
	)
}

export default Header;