import { Character, RickAndMortyResponse } from '../types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (): Promise<Character[]> => {
  const response = await fetch(`${BASE_URL}/character`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  const data: RickAndMortyResponse = await response.json();
  return data.results;
};

export const getCharacterById = async (id: string | number): Promise<Character> => {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch character with id ${id}`);
  }

  return response.json();
};