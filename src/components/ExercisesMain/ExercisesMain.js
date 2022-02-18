import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import '../ExercisesMain/ExercisesMain.css';
import benchpress from '../../Assets/flat-barbell-bench-press-form.png';
import dumbbellbenchpress from '../../Assets/flat-dumbbell-bench-press-form.png';
import inclinebarbellbenchpress from '../../Assets/incline-barbell-bench-press-form.png';

function ExercisesMain(props) {
	// return (
	// 	<div className='all-exercises'>
	// 		<Navigation />
	// 		All Exercises
	//         <div>
	//         </div>
	// 	</div>
	// );
	// const [exercises, setExercises] = useState([]);
	// useEffect(() => {
	// 	getExercise();
	// }, []);
	// async function getExercise() {
	// 	const url = ``;
	// 	const res = await fetch(url);
	// 	const resJson = await res.json();
	// 	setExercises(resJson);
	// }
	// if (!exercises) {
	// 	return <p>Loading Exercises...</p>;
	// }
	return (
		<div>
			<Navigation />
			<div className='whiteBk'>
				{/* <h1 className='pageTitle'>All Exercises</h1> */}
				{/* <p className='exerciseDirections'>
					Click on any exercise below to learn more!
				</p> */}
				<div className='main-exercises'>
					<h1 className='pageTitle'>All Exercises</h1>
					<section className='exercisesContainer'>
						{/* {exercises.nap((exercise) => { */}
						{/*  */}

						<div className='exerciseCard'>
							<div className='cardTitle'>
								<h3 className='exercise-name'>Flat Barbell Bench Press</h3>
							</div>
							{/* <Link to={`/exerciseDetails/${exercise._id}`} key={exercise.id}> */}
							<div className='cardImage'>
								<img src={benchpress} alt='flat barbell bench press' />
								{/* <img
									src={dumbbellbenchpress}
									alt='flat dumbbell  bench press'
								/>
								<img src={benchpress} alt='flat barbell bench press' />
								<img src={benchpress} alt='flat barbell bench press' /> */}
							</div>
							<br />
							<div className='how-to'>
								<button>Details</button>
								{/* The barbell bench press exercise is an upper body pressing
								movement. Commonly used to build muscle size and body strength;
								this exercise targets the upper body muscles including: chest,
								triceps, and shoulders.The barbell bench press requires the
								person working out to lie flat on a bench which allows for
								improved muscle stability and the ability to lift a heavy amount
								of weight. Which will lead to greater muscle development.The
								barbell bench press exercise is a great for people looking to
								build strength, increase body size, and power. */}
							</div>
							<div className='primary-muscles'>Primary Muscle Group: Chest</div>
							<div className='secondary-muscles'>
								Secondary Muscle Group: Shoulders and Triceps
							</div>
							{/* </Link> */}
						</div>
						<div className='exerciseCard'>
							<div className='cardTitle'>
								<h3 className='exercise-name'>Flat Dumbbell Bench Press</h3>
							</div>
							{/* <Link to={`/exerciseDetails/${exercise._id}`} key={exercise.id}> */}
							<div className='cardImage'>
								<img src={dumbbellbenchpress} alt='flat dumbbell bench press' />
								{/* <img
									src={dumbbellbenchpress}
									alt='flat dumbbell  bench press'
								/>
								<img src={benchpress} alt='flat barbell bench press' />
								<img src={benchpress} alt='flat barbell bench press' /> */}
							</div>
							<br />
							<div className='how-to'>
								Lie on a flat bench holding a dumbbell in each hand with an
								overhand grip.Start by holding the dumbbells slightly wider than
								shoulder width apart above your shoulders. Your palms should be
								facing forward. Slowly bend your elbows until they are at a 90
								degree angle and your upper arms are parallel to the ground.
								Push the weights up by straightening your arms. As you push the
								weights up, move your arms in an arc to bring the dumbbells
								together, until they meet over the center of your chest. Hold
								for a count of one. Lower the dumbbells by slowly bending your
								elbows back to 90 degrees. Continue lowering your arms until
								they are a little lower than parallel to the floor. (Your elbows
								should be pointing slightly towards the floor and you should
								feel a stretch in your chest muscles and shoulders.) Repeat
							</div>
							<div className='primary-muscles'>Primary Muscle Group: Chest</div>
							<div className='secondary-muscles'>
								Secondary Muscle Group: Shoulders and Triceps
							</div>
							{/* </Link> */}
						</div>
						<div className='exerciseCard'>
							<div className='cardTitle'>
								<h3 className='exercise-name'>Incline Barbell Bench Press</h3>
							</div>
							{/* <Link to={`/exerciseDetails/${exercise._id}`} key={exercise.id}> */}
							<div className='cardImage'>
								<img
									src={inclinebarbellbenchpress}
									alt='incline barbell bench press'
								/>
								{/* <img
									src={dumbbellbenchpress}
									alt='flat dumbbell  bench press'
								/>
								<img src={benchpress} alt='flat barbell bench press' />
								<img src={benchpress} alt='flat barbell bench press' /> */}
							</div>
							<br />
							<div className='how-to'>
								The incline barbell bench press is an upper body strength
								exercise that targets the chest, shoulder, and triceps.
								Performing this move on an incline allows for targeted emphasis
								on the upper portion of the chest. The incline also makes it
								safer and more joint-friendly for your shoulders.
							</div>
							<div className='primary-muscles'>Primary Muscle Group: Chest</div>
							<div className='secondary-muscles'>
								Secondary Muscle Group: Shoulders and Triceps
							</div>
							{/* </Link> */}
						</div>
						<div className='exerciseCard'>
							<div className='cardTitle'>
								<h3 className='exercise-name'>Flat Dumbbell Bench Press</h3>
							</div>
							{/* <Link to={`/exerciseDetails/${exercise._id}`} key={exercise.id}> */}
							<div className='cardImage'>
								<img src={dumbbellbenchpress} alt='flat barbell bench press' />
								{/* <img
									src={dumbbellbenchpress}
									alt='flat dumbbell  bench press'
								/>
								<img src={benchpress} alt='flat barbell bench press' />
								<img src={benchpress} alt='flat barbell bench press' /> */}
							</div>
							<br />
							<div className='how-to'>
								Lie on a flat bench holding a dumbbell in each hand with an
								overhand grip.Start by holding the dumbbells slightly wider than
								shoulder width apart above your shoulders. Your palms should be
								facing forward. Slowly bend your elbows until they are at a 90
								degree angle and your upper arms are parallel to the ground.
								Push the weights up by straightening your arms. As you push the
								weights up, move your arms in an arc to bring the dumbbells
								together, until they meet over the center of your chest. Hold
								for a count of one. Lower the dumbbells by slowly bending your
								elbows back to 90 degrees. Continue lowering your arms until
								they are a little lower than parallel to the floor. (Your elbows
								should be pointing slightly towards the floor and you should
								feel a stretch in your chest muscles and shoulders.) Repeat
							</div>
							<div className='primary-muscles'>Primary Muscle Group: Chest</div>
							<div className='secondary-muscles'>
								Secondary Muscle Group: Shoulders and Triceps
							</div>
							{/* </Link> */}
						</div>
						<div className='exerciseCard'>
							<div className='cardTitle'>
								<h3 className='exercise-name'>Flat Dumbbell Bench Press</h3>
							</div>
							{/* <Link to={`/exerciseDetails/${exercise._id}`} key={exercise.id}> */}
							<div className='cardImage'>
								<img src={dumbbellbenchpress} alt='flat barbell bench press' />
								{/* <img
									src={dumbbellbenchpress}
									alt='flat dumbbell  bench press'
								/>
								<img src={benchpress} alt='flat barbell bench press' />
								<img src={benchpress} alt='flat barbell bench press' /> */}
							</div>
							<br />
							<div className='how-to'>
								Lie on a flat bench holding a dumbbell in each hand with an
								overhand grip.Start by holding the dumbbells slightly wider than
								shoulder width apart above your shoulders. Your palms should be
								facing forward. Slowly bend your elbows until they are at a 90
								degree angle and your upper arms are parallel to the ground.
								Push the weights up by straightening your arms. As you push the
								weights up, move your arms in an arc to bring the dumbbells
								together, until they meet over the center of your chest. Hold
								for a count of one. Lower the dumbbells by slowly bending your
								elbows back to 90 degrees. Continue lowering your arms until
								they are a little lower than parallel to the floor. (Your elbows
								should be pointing slightly towards the floor and you should
								feel a stretch in your chest muscles and shoulders.) Repeat
							</div>
							<div className='primary-muscles'>Primary Muscle Group: Chest</div>
							<div className='secondary-muscles'>
								Secondary Muscle Group: Shoulders and Triceps
							</div>
							{/* </Link> */}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default ExercisesMain;
