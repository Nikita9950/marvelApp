import axios, { AxiosResponse } from 'axios';

const apiBase = 'http://gateway.marvel.com/v1/public/';
const API_KEY = '029dd13ae8db86f3768cc0b0a8b3910f';
const API_HASH = 'e63cb8b1de53db2940e0c5a7e77c10c6';

export async function getResourse(params: string): Promise<AxiosResponse> {
  const res = await axios.get(`${apiBase}${params}ts=1&apikey=${API_KEY}&hash=${API_HASH}`);
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
