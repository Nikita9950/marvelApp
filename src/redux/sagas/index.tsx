import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCharacter, getComicsByCharacter } from '../../api/api';
import { getCharacters, errorGetCharacters, ILoadCharacters } from '../actions/charactersActions';
import { getComics, errorGetComics, ILoadComics } from '../actions/comicsActions';

export function* sagaHeroesWorker(action: ILoadCharacters) {
  try {
    const data: AxiosResponse = yield call(getCharacter, action.payload);
    yield put(getCharacters(data.data.data.results));
  } catch (error) {
    yield put(errorGetCharacters('Request Error'));
  }
}

export function* sagaComicsWorker(action: ILoadComics) {
  try {
    const data: AxiosResponse = yield call(getComicsByCharacter, action.payload);
    yield put(getComics(data.data.data.results));
  } catch (error) {
    yield put(errorGetComics('Request Error'));
  }
}

export function* sagaWatcher(): Generator {
  yield takeEvery('LOAD_CHARACTERS', sagaHeroesWorker);
  yield takeEvery('LOAD_COMICS', sagaComicsWorker);
}

export function* rootSaga(): Generator {
  yield sagaWatcher();
}
