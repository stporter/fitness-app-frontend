Your group members and scrum leader (if applicable)
Working Alone!

Your project idea
Fiit Trackr is a fitness tracker app that allows you to search through a library of exercises and learn more about each one as well as how to properly execute that specific exercise. 
Fiit Trackr allows you do create your own workout routines and save them within the app! You will also be able to track your weights, reps, and sets! This app is perfect for both beginner and intermediate lifters!

Your tech stack (frontend, backend, database)
Front End: React
Backend: Express / Mongoose, Node.js
Database: MongoDB

List of backend models and their properties

const ExerciseSchema = new mongoose.Schema({
	id: Number,
	name: String,
	image: String,
	image2: String,
	description: String,
	category: [
		{
			primaryMuscleGroup: String,
			secondaryMuscleGroup: String,
		},
	],
});

const WorkoutSchema = new mongoose.Schema({
	id: Number,
	workoutName: String,
	// workoutCategory: String,
	workoutExercises: [
		{
			id: Number,
			name: String,
			image: String,
			description: String,
		},
	],
});


React component hierarchy (if applicable)
-App

--Nav
---About

--Exercises
---Exercise Category
----Exercise Details
---MyWorkouts

MPV
As a user I want to be able to be able to see a list of all exercises so that I know what exercises are available to me
As a user I want to be able to see a list of step by step instructions on how to perform each exercise so that I can execute the exercise correctly

Stretch Goals
As a user I want to be able to track my weights, sets, reps so that do not have to memorize all of this info
As a user I want to be able to track my weight for that day so I can keep track of my progress
As a user I want to be able to watch a video tutorial demonstrating each exercises so that I can perform the exercise correctly
As a user I want to be able to click on an exercise so that I can learn more about that exercise
As a user I want to be able to able to create my own workout routines so that I have a plan before going to the gym or working out at home
As a user I want to be able to click on a specific body part category (chest, back, legs, etc.) so that I can filter through what body part I want to train that day.

Wireframes
