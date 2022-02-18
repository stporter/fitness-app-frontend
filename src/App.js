import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import ExercisesMain from './components/ExercisesMain/ExercisesMain';
import ExerciseDetails from './components/ExercisesMain/ExerciseDetails/ExerciseDetails';

function App() {
	return (
		<div className='App'>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/exercisesMain' element={<ExercisesMain />} />
					<Route path='/exerciseDetails/:id' element={<ExerciseDetails />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
