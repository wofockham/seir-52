const vocabBuilder = require('../controllers/vocabController');

module.exports = (app) => {
    app
        .route('/words')
        .get(vocabBuilder.listAllWords)
        .post(vocabBuilder.createWord);

    app
        .route('/words/:wordId')
        .get(vocabBuilder.readWord)
        .put(vocabBuilder.updateWord)
        .delete(vocabBuilder.deleteWord);
};
