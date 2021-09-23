import axios, { AxiosResponse } from 'axios';

const { REACT_APP_API_KEY, REACT_APP_API_HASH } = process.env;
const apiBase = 'http://gateway.marvel.com/v1/public/';

export async function getResourse(params: string): Promise<AxiosResponse> {
  const res = await axios.get(
    `${apiBase}${params}ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}`
  );
  try {
    return res;
  } catch (error) {
    throw new Error('Error');
  }
}

export async function getCharacter(params = ''): Promise<AxiosResponse> {
  return getResourse(`characters?${params}&`);
}

export function getCharacterById(characterId: string): Promise<AxiosResponse> {
  return getResourse(`characters/${characterId}?`);
}
