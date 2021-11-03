import axios, { AxiosResponse } from 'axios';

const { REACT_APP_API_KEY, REACT_APP_API_HASH } = process.env;
const URL_BASE = 'http://gateway.marvel.com/v1/public/';

export async function getResourse(url: string, offset: number, characterQueryName?: string | undefined): Promise<AxiosResponse> {
  const res = await axios.get(`${URL_BASE}${url}`, {
    params: {
      apikey: REACT_APP_API_KEY,
      hash: REACT_APP_API_HASH,
      ts: 1,
      offset: offset,
      limit: 10,
      nameStartsWith: characterQueryName,
    },
  });
  try {
    console.log(res);

    return res;
  } catch (error) {
    throw new Error('Error');
  }
}

export async function getCharacter(currentPage: number, characterQueryName: string | undefined): Promise<AxiosResponse> {
  return getResourse('characters?', currentPage, characterQueryName);
}

export function getComicsByCharacter(currentPage: number, characterId: string): Promise<AxiosResponse> {
  return getResourse(`characters/${characterId}/comics?`, currentPage);
}
