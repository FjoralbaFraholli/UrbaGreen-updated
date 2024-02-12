const QuizzController = require('../controllers/quizzs.controller'); 
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/quizzes', authenticate, QuizzController.getAllQuizzs);
    app.post('/api/quizz', authenticate, QuizzController.createQuizz);
    app.get('/api/quizz/:id', authenticate, QuizzController.getOneQuizz);
    app.put('/api/quizz/:id', authenticate, QuizzController.getOneQuizzAndUpdate);
    app.delete('/api/quizz/:id', authenticate, QuizzController.deleteQuizz);
    app.put('/api/quizz/:id/:userId/favorite/:action', authenticate, QuizzController.addToFavorites);
}

