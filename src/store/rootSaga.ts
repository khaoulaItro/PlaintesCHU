// src/store/rootSaga.ts
import { all, fork } from 'redux-saga/effects';
// Importez vos sagas ici et ajoutez-les à l'effet all
// import someSaga from './someSaga';

function* rootSaga() {
  yield all([
    // Fork vos sagas ici
    // fork(someSaga),
  ]);
}

export default rootSaga;
