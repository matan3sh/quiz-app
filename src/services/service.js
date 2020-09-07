import db from './db';
import storageService from './storageService';

export default {
  query,
};

const KEY = 'quiz';
var gQuiz = null;
_createQuiz();

function _createQuiz() {
  const defaultData = db.getDefaultData();
  gQuiz = storageService.load(KEY, defaultData);
  storageService.store(KEY, gQuiz);
}

function query() {
  return Promise.resolve(gQuiz);
}
