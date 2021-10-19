import { call, put, takeEvery } from 'redux-saga/effects';
import { getCharacter, getComicsByCharacter } from '../../api/api';
import { getCharacters, errorGetCharacters } from '../actions/charactersActions';
import { getComics, errorGetComics } from '../actions/comicsActions';

export function* sagaHeroesWorker(action: any): any {
  try {
    const data: any = yield call(getCharacter, action.payload);
    yield put(getCharacters(data));
  } catch (error) {
    yield put(errorGetCharacters(error));
  }
}

export function* sagaComicsWorker(action: any): any {
  try {
    const data: any = yield call(getComicsByCharacter, action.payload);
    yield put(getComics(data));
  } catch (error) {
    yield put(errorGetComics(error));
  }
}

export function* sagaWatcher() {
  yield takeEvery('LOAD_CHARACTERS', sagaHeroesWorker);
  yield takeEvery('LOAD_COMICS', sagaComicsWorker);
}

export function* rootSaga() {
  yield sagaWatcher();
}
