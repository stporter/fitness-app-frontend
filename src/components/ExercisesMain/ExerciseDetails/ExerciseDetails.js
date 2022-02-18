import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import '../ExerciseDetails/ExerciseDetails.css';

function ExerciseDetails(props) {
	const [exercise, setExercise] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getExercises();
	}, [id]);

	async function getExercises() {
		const url = ``;

		try {
			const res = await fetch(url);
			const resJson = await res.json();
			setExercise(res.Json);
		} catch (error) {
			console.log(error);
		}
	}

	if (!exercise) {
		return <p>Exercise Loading...</p>;
	}

	return (
		<div>
			<Navigation />
			<div className='whiteBk'>
				<br />
				<div className='cardContainer'>
					<h2 className='exerciseName'>{exercise.name}</h2>
					<img className='img' src={exercise.image} alt={exercise.name} />
					<div className='container'>
						<div className='details'>
							<p className='description'>{exercise.description}</p>
							<br />
							<div className='categoryDisplay'>
								<h3 className='categories'>Muscle Groups Worked</h3>
								{exercise.category[0] != null && (
									<>
										<p className='primaryMuscleGroup'>
											{exercise.category[0].primaryMuscleGroup}
										</p>
										<p className='secondaryMuscleGroup'>
											{exercise.category[0].secondaryMuscleGroup}
										</p>
									</>
								)}
								{exercise.category[1] != null && (
									<>
										<p className='primaryMuscleGroup'>
											{exercise.category[1].primaryMuscleGroup}
										</p>
										<p className='secondaryMuscleGroup'>
											{exercise.category[1].secondaryMuscleGroup}
										</p>
									</>
								)}
								{exercise.category[2] != null && (
									<>
										<p className='primaryMuscleGroup'>
											{exercise.category[2].primaryMuscleGroup}
										</p>
										<p className='secondaryMuscleGroup'>
											{exercise.category[2].secondaryMuscleGroup}
										</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExerciseDetails;
