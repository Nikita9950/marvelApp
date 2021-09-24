import axios, { AxiosResponse } from 'axios';

const { REACT_APP_API_KEY, REACT_APP_API_HASH } = process.env;
const URL_BASE = 'http://gateway.marvel.com/v1/public/';
// const key = `ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}`;

export async function getResourse(
  url: string,
  characterQueryName?: string
): Promise<AxiosResponse> {
  const res = await axios.get(`${URL_BASE}${url}`, {
    params: {
      apikey: REACT_APP_API_KEY,
      hash: REACT_APP_API_HASH,
      ts: 1,
      limit: 5,
      nameStartsWith: characterQueryName,
    },
  });
  try {
    return res;
  } catch (error) {
    throw new Error('Error');
  }
}

export async function getCharacter(characterQueryName?: string): Promise<AxiosResponse> {
  return getResourse('characters?', characterQueryName);
}

export function getComicsByCharacter(characterId: string): Promise<AxiosResponse> {
  return getResourse(`characters/${characterId}/comics?`);
}
