#!/usr/bin/env node

// Import necessary modules
import chalk from 'chalk' // For colorful console output
import chalkAnimation from 'chalk-animation' // For animated text
import figlet from 'figlet' // For creating ASCII art text
import gradient from 'gradient-string' // For gradient text
import inquirer from 'inquirer' // For user input prompts
import { createSpinner } from 'nanospinner' // For displaying a spinner

import phrases from './phrases.js' // Custom phrases for game responses
import questions from './questions.js' // Question data

// List of money amounts
const money = [
	'2,000',
	'4,000',
	'8,000',
	'16,000',
	'32,000',
	'64,000',
	'125,000',
	'250,000',
	'500,000',
	'1,000,000',
]

let account = '0' // Player's current account balance
let question = 0 // Current question index
let isContinue = true // Flag to continue or end the game

// Utility function to sleep for a given time
const sleep = (ms = 2000) => new Promise(r => setTimeout(r, ms))

// Utility function to generate a random integer between 0 and 9
const getRandomInt = () => {
	return Math.floor(Math.random() * 10)
}

// Function to display the welcome message
const welcome = async () => {
	const rainbowTitle = chalkAnimation.rainbow(
		'Who Wants To Be a Programmer Millionaire? \n'
	)

	await sleep()
	rainbowTitle.stop()

	console.log(`
${chalk.bgBlue('HOW TO PLAY?')}
I am  a process on your computer.
If you get any question wrong I will be ${chalk.bgRed('killed')}
	`)
}

// Function to handle the player's answer
const handleAnswer = async (isCorrect, question_id) => {
	const spinner = createSpinner('Checking answer...').start()
	await sleep()

	if (isCorrect) {
		spinner.success({ text: phrases.success[getRandomInt()] })
		account = money[question_id]

		if (account === '1,000,000') winner()
		else await askContinue()
	} else {
		spinner.error({ text: phrases.error[getRandomInt()] })
		process.exit(1) // Exit the game with an error code
	}
}

// Function to ask the player if they want to continue or take money
const askContinue = async () => {
	const answers = await inquirer.prompt({
		name: 'is_continue',
		type: 'list',
		message: `You have $${account}. Do you want to continue or take money?`,
		choices: ['Continue', 'Money'],
	})

	if (answers.is_continue === 'Money') {
		isContinue = false
		winner()
	}
}

// Function to ask a question to the player
const askQuestion = async id => {
	const question = questions[id][getRandomInt()]
	const answers = await inquirer.prompt({
		name: `question_${id}`,
		type: 'list',
		message: question.text,
		choices: question.answers.sort(() => Math.random() - 0.5),
	})

	return handleAnswer(answers[`question_${id}`] === question.right_answer, id)
}

// Function to display the winning message
const winner = async () => {
	await sleep()
	console.clear()
	const msg = `Congratulations!\n$${account.replace('', ' ')}`

	figlet(msg, (err, data) => {
		console.log(gradient.pastel.multiline(data))
	})
}

// Main game loop function
const game = async () => {
	await welcome()
	while (isContinue) {
		await askQuestion(question)
		question++
	}
}

// Start the game
await game()
