import {
  PokemonSpecies,
  useGetPokemonSpeciesQuery,
} from './calculator-osvc-lib-api';

export default function CalculatorOsvcContent() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonSpeciesQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  if (isLoading) {
    return <p>Načítám data...</p>;
  } else if (error) {
    return <p>{`Došlo k chybě: ${error}`}</p>;
  } else if (data) {
    return (
      <>
        {data.results.map((species: PokemonSpecies) => (
          <p key={species.name}>{species.name}</p>
        ))}
      </>
    );
  } else {
    return <p>Něco se pokazilo</p>;
  }
}
