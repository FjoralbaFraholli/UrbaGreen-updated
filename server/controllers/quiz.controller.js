const Quizz = require('../models/quizzs.model');

module.exports.getAllQuizzes = async (req, res) => {
    try {
        // Use populate to include user details
        const quizzes = await Quizz.find().populate('userId', 'firstName lastName');

        return res.json({ quizzs });
    } catch (error) {
        console.error('Error fetching quizzs:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

 
module.exports.getOneQuizz = (req, res) => {
    Quizz.findOne({ _id: req.params.id })
        .then(oneQuizz => {
            res.json({ quizz: oneQuizz })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createQuizz = (req, res) => {
    Quizz.create(req.body)
        .then(newlyCreatedQuizz => {
            res.json({ quizz: newlyCreatedQuizz })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}
 
// module.exports.getOneQuizzAndUpdate = (req, res) => {
//     Quizz.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true }
//     )
//         .then(updatedQuizz => {
//             res.json({ quizz: updatedQuizz })
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json({ message: 'Something went wrong', error: err })
//         });}
 
module.exports.deleteQuizz = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Quizz.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Quizz not found' });
        }

        res.json({ message: 'Quizz deleted successfully' });
    } catch (error) {
        console.error('Error deleting quizz:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



// // quizz.controller.js

// // Import necessary modules
// const Quiz = require('./quizz.model');

// // Controller function to handle quiz submission
// exports.submitQuiz = async (req, res) => {
//     try {
//         // Extract answers from the request body
//         const { answers } = req.body;

//         // Fetch the quiz questions from the database
//         const quiz = await Quiz.findOne();

//         if (!quiz) {
//             return res.status(404).json({ message: 'Quiz questions not found' });
//         }

//         // Calculate total points based on answers
//         let totalPoints = 0;
//         quiz.questions.forEach((question, index) => {
//             const selectedAnswer = answers[index];
//             if (selectedAnswer && question.criteria.has(selectedAnswer)) {
//                 totalPoints += question.criteria.get(selectedAnswer);
//             }
//         });

//         // Determine result message based on total points
//         let resultMessage = '';
//         if (totalPoints < 50) {
//             resultMessage = "Hurray!!! You are a Low carbon HERO!!! Keep up the good work and encourage others to do the same!";
//         } else if (totalPoints >= 50 && totalPoints <= 100) {
//             resultMessage = "Eco Warrior Pretty good, you're getting there!";
//         } else {
//             resultMessage = "Eco Villain There is an elephant in the room and it is your carbon footprint!!!";
//         }

//         // Send response with total points and result message
//         res.status(200).json({ totalPoints, resultMessage });
//     } catch (error) {
//         // Handle errors
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

        
        