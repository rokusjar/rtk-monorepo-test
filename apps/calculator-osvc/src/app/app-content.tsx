import { useGetPokemonSpeciesQuery } from 'libs/calculator-osvc-lib/src/lib/calculator-osvc-lib-api';
import {
  PokemonHabitat,
  useGetPokemonHabitatQuery,
} from './calculator-osvc-api';

export default function AppContent() {
  const { data, error, isLoading } = useGetPokemonHabitatQuery();

  // Pokud potřebuju data z lib API tak si na ně mohu sáhnout i takto, protože mám jen jeden store
  const {
    data: species,
    error: speciesError,
    isLoading: speciesIsLoading,
  } = useGetPokemonSpeciesQuery();
  console.log(species);

  if (isLoading) {
    return <p>Načítám data...</p>;
  } else if (error) {
    return <p>{`Došlo k chybě: ${error}`}</p>;
  } else if (data) {
    return (
      <>
        {data.results.map((habitat: PokemonHabitat) => (
          <p key={habitat.name}>{habitat.name}</p>
        ))}
      </>
    );
  } else {
    return <p>Něco se pokazilo</p>;
  }
}
