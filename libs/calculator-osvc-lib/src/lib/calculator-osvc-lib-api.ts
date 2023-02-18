// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PokemonSpecies {
  name: string;
  url: string;
}

interface PokemonSpeciesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonSpecies>;
}

// Define a service using a base URL and expected endpoints
export const calculatorOsvcLibApi = createApi({
  reducerPath: 'calculatorOsvcLibApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonSpecies: builder.query<PokemonSpeciesResponse, void>({
      query: () => `/pokemon-species/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonSpeciesQuery } = calculatorOsvcLibApi;
