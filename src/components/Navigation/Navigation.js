import React from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import homelogo from '../../Assets/homelogo.png';
import '../Navigation/Navigation.css';

function Navigation(props) {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	return (
		<nav className='navBar'>
			<Link to='/'>
				<div className='header-box'>
					<img className='home-logo' src={homelogo} alt='Logo' />
					<h1 className='header-text'>Fiit Trackr</h1>
				</div>
			</Link>
			<div className='buttonDiv'>
				<button onClick={handleToggle}>
					{navbarOpen ? (
						<MdClose
							style={{ color: '#fff', width: '40px', height: '40px ' }}
						/>
					) : (
						<FiMenu
							style={{ color: '#383838', width: '40px', height: '40px' }}
						/>
					)}
				</button>
				<ul
					className='menuNav'
					style={{ display: navbarOpen ? 'flex' : 'none' }}>
					<li>
						<Link className='navLink' to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className='navLink' to='/exercisesMain'>
							All Exercises
						</Link>
					</li>

					<li>
						<Link className='navLink' to='/about'>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
