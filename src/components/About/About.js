import React from 'react';
import Navigation from '../Navigation/Navigation';
import './About.css';
import headshot from '../../Assets/headshot.jpg';

function About(props) {
	return (
		<div className='footerSpacing'>
			<Navigation />
			<div className='whiteBk'>
				<h1 className='pageTitle'>About</h1>
				<p className='aboutBody'>
					This app was created for both beginner and intermediate lifters.
					Browse through an extensive list of over 200 exercises to learn more
					about each one and how to propertly execute that specific exercise.
				</p>

				{/* <p className='subtext'>Get Fiit</p> */}

				<div className='myCard'>
					<div>
						<a
							className='linkedIn'
							target='_blank'
							rel='noreferrer'
							href='https://www.linkedin.com/in/sean-travis-porter/'>
							<img className='headshotImg' src={headshot} alt='My Headshot' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default About;
