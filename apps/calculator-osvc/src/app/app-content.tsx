import {
  PokemonHabitat,
  useGetPokemonHabitatQuery,
} from './calculator-osvc-api';

export default function AppContent() {
  const { data, error, isLoading } = useGetPokemonHabitatQuery();

  if (isLoading) {
    return <p>Načítám data...</p>;
  } else if (error) {
    return <p>{`Došlo k chybě: ${error}`}</p>;
  } else if (data) {
    return (
      <>
        {data.results.map((habitat: PokemonHabitat) => (
          <p>{habitat.name}</p>
        ))}
      </>
    );
  } else {
    return <p>Něco se pokazilo</p>;
  }
}
