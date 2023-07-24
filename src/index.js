#!/usr/bin/env node

import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import { createSpinner } from 'nanospinner'

import phrases from './phrases.js'
import questions from './questions.js'

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

let account = '0'
let question = 0
let isContinue = true

const sleep = (ms = 2000) => new Promise(r => setTimeout(r, ms))

const getRandomInt = () => {
	return Math.floor(Math.random() * 10)
}

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
		process.exit(1)
	}
}

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

const winner = async () => {
	await sleep()
	console.clear()
	const msg = `Congratulations!\n$${account.replace('', ' ')}`

	figlet(msg, (err, data) => {
		console.log(gradient.pastel.multiline(data))
	})
}

const game = async () => {
	await welcome()
	while (isContinue) {
		await askQuestion(question)
		question++
	}
}

await game()
