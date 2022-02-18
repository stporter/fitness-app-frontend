import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import '../ExercisesMain/ExercisesMain.css';

function ExercisesMain(props) {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		getExercise();
	}, []);

	async function getExercise() {
		const url = ``;
		const res = await fetch(url);
		const resJson = await res.json();
		setExercises(resJson);
	}

	if (!exercises) {
		return <p>Loading Exercises...</p>;
	}

	return (
		<div>
			<Navigation />
			<div className='whiteBk'>
				<h1 className='pageTitle'>All Exercises</h1>
				<p className='exerciseDirections'>
					Click on any exercise below to learn more!
				</p>
				<div className='main-exercises'>
					<section className='exercisesContainer'>
						{exercises.nap((exercise) => {
							return (
								<div className='exerciseCard'>
									<Link
										to={`/exerciseDetails/${exercise._id}`}
										key={exercise.id}>
										<div className='cardImage'>
											<img src={exercise.image} alt={exercise.name} />
										</div>
									</Link>
									<div className='cardTitle'>
										<h3 className='exerciseName'>{exercise.name}</h3>
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</div>
		</div>
	);
}

export default ExercisesMain;
