// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PokemonHabitat {
  name: string;
  url: string;
}

interface PokemonHabitatResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonHabitat>;
}

// Define a service using a base URL and expected endpoints
export const calculatorOsvcApi = createApi({
  reducerPath: 'calculatorOsvcApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonHabitat: builder.query<PokemonHabitatResponse, void>({
      query: () => `/pokemon-habitat/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonHabitatQuery } = calculatorOsvcApi;
