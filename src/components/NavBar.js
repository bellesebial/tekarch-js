import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './styles.css';
import {Link} from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>TeknoyArchives</h3>

			<nav ref={navRef} className="nav">
				<Link to="/dashboard" style={{textDecoration:'inherit'}}>Home</Link>
				<Link to="/">Teknoy Books</Link>
				<Link to="/">Reviews</Link>
				<Link to="/profile" style={{textDecoration:'inherit'}}>User</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;