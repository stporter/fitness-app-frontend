import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import homelogo from '../../Assets/homelogo.png';
import './Home.css';

function Home() {
	return (
		<section>
			<h1 className='title'>Fiit Trackr</h1>
			<img className='homeLogo' src={homelogo} alt='Home Logo' />
			<ul className='homeNav'>
				<li>
					<Link to='/exercisesMain'>All Exercises</Link>
				</li>

				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</section>
	);
}
export default Home;
