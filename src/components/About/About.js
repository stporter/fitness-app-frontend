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
					Fiit Trackr is a fitness tracker app that allows you to search through
					a library of exercises and learn more about each one as well as how to
					properly execute that specific exercise. Fiit Trackr allows you do
					create your own workout routines and save them within the app! You
					will also be able to track your weights, reps, and sets! This app is
					perfect for both beginner and intermediate lifters!
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
