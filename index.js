const readline = require('readline-sync')
const chalkpiece = require('chalk')
const error = chalkpiece.bgRedBright.whiteBright.underline.bold.strikethrough;
const correctAnswer = chalkpiece.blue.bgGreen.bold.underline.bold;
const scoreView = chalkpiece.bold.italic.yellowBright;
const welcome = chalkpiece.greenBright.italic;
const highest = chalkpiece.bgYellow.greenBright.underline.bold;
console.log(chalkpiece.blue.bgGreen.bold.underline("Hello Buddy! How you doing"))
var qOne = readline.question(chalkpiece.bgWhite.blackBright.italic.underline("\nMay I know your name please:") + " ")

//Welcome Message for user
console.log(chalkpiece.bgCyan("---------------------------------------------"))
console.log(chalkpiece.greenBright("Welcome! "), chalkpiece.bold.cyanBright(qOne.toUpperCase()), welcome("\nGood to have you for the quiz", "\nLet's see how much you know about Dhanush"))
console.log(chalkpiece.bgCyan("---------------------------------------------"))
console.log(chalkpiece.italic.keyword('orange')("Type only the letter of option "))

var score = 0

//List to store Q's and A's
var quizQnA = [{
        question: "1] Which city do i live in ? \n a.Delhi\n b.Bangalore \n c.AndraPradesh\n d.Chennai \n Your Answer->",
        answer: "b"
    },
    {
        question: "2] Which is my favorite color ?\n a.Green\n b.Blue \n c.Yellow\n d.Cyan \nYour Answer->",
        answer: "b"
    },
    {
        question: "3] Which my favorite dish ? \n a.Samosa\n b.Gobi Manchurian \n c.Paneer Tikka\n d.Chola bature \n Your Answer->",
        answer: "c",
        answers: "paneer tikka"
    },
    {
        question: "4] What is my hobby ? \n a.Table Tennis\n b.Gardening \n c.Cricket\n d.Competitive Programming\n Your Answer->",
        answer: "a"
    },
    {
        question: "5] Which is my favorite tv show ? \n a.Mr.Robot\n b.Death Note \n c.Suits\n d.Breakiong Bad\n Your Answer->",
        answer: "b",

    },
    {
        question: "6] Which is my favorite travel destination? \n a.Thailand\n b.Paris \n c.Himalayas\n d.Las Vegas\n Your Answer->",
        answer: "c"
    }, {
        question: "7] Who is the person that I looked up to the most growing up?  \n a.Hrithik Roshan\n b.Albert Einstein \n c.Nikola Tesla\n d.None\n Your Answer->",
        answer: "c",
    },
    {
        question: "8] What is the goal that I have in life that I would like to accomplish soon? \n a.Get a Job\n b.World Tour \n c.Trek at Himalayas\n d.Work at Tesla \n Your Answer->",
        answer: "c",
    },
    {
        question: "9] What is my favorite type of music?  \n a.Rock\n b.Jazz \n c.Hindustani\n d.I'm ok with anything soothing\n Your Answer->",
        answer: "d",
    },
    {
        question: "10] Who is my favorite current celebrity?  \n a.Nelson Mandela\n b.Yash \n c.Elon Musk\n d.Jeff Bezos\n Your Answer->",
        answer: "c",
    },
    {
        question: "11] What was my favorite TV show growing up?  \n a.Pokemon\n b.Power Rangers \n c.Tom and Jerry\n d.Shakti Maan\n Your Answer->",
        answer: "d",
    },
    {
        question: "12] Did I have a cell phone growing up? \n a.Yes\n b.No\n Your Answer->",
        answer: "b",
    },
    {
        question: "13] Who was I named after?  \n a. A bow \n b.God \n c.Nature\n d.By Consulting Astrologer\n Your Answer->",
        answer: "a",
    },
    {
        question: "14] Which is my favorite toy from childhood ? \n a.Wooden top\n b.Remote control car \n c.Cricket bat\n d.Tricycle\n Your Answer->",
        answer: "a",
    },
    {
        question: "15] I am also known as? \n a.DK\n b.Danny \n c.Dhanush\n Your Answer->",
        answer: "b",
    },
]

//list to store users with high score 
var highScore = [{
        name: "Dhanush",
        score: "15",
    },
    {
        name: "Ashish",
        score: "13",
    },
    {
        name: "Ani",
        score: "12",
    }

]

function quizFunc(question, answer) {
    var quizAnswer = readline.question(chalkpiece.bgBlue(question))

    if (quizAnswer.toLowerCase() === answer) {
        console.log(correctAnswer("Hurray! That's a right answer"))
        score++
        console.log(scoreView("Your current score is: " + score))
        console.log(chalkpiece.bgWhite("----------------------------------------"))
    } else {
        console.log(chalkpiece.keyword('orange')("Oops! ") + error(quizAnswer.toUpperCase() + " is incorrect") + "\n" + correctAnswer(answer.toUpperCase() + " is the correct answer"))
        score--
        console.log(scoreView("Your current score is: " + score))
        console.log(chalkpiece.bgWhite("----------------------------------------"))
    }
}
for (var i = 0; i < quizQnA.length; i++) {
    quizFunc(quizQnA[i].question, quizQnA[i].answer)
    if (i === (quizQnA.length) - 1) {
        topPerformers()
        console.log("Your final score is: " + score)
        for (var j = 0; j < highScore.length; j++) {
            if (score > highScore[j].score) {
                console.log(highest("Hurray! Kudos " + " You beat->" + highScore[j].name + " by " + ((score - highScore[j].score)) + " points"))
                if (j === highScore.length - 1) {
                    console.log("\nPlease send us a Screenshot of your score")
                }
            }

        }
    }
}

function topPerformers() {
    console.log(welcome("We have " + highScore.length + " top performers" + "\nThey are:"))
    for (var k = 0; k < highScore.length; k++) {
        console.log(welcome((k + 1) + ": " + highScore[k].name + "\n" + "Score: " + highScore[k].score))
    }
}

console.log(welcome("\n Thank you for taking up this quiz.\nHave a nice day"))