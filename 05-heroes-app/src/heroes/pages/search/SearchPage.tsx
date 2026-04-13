import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { SearchControls } from './ui/SearchControls';
import { HeroStats } from '@/heroes/components/HeroStats';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { searchHeroesAction } from '@/heroes/actions/search-heroes.action';

export const SearchPage = () => {

  const [ searchParams ] = useSearchParams();

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;

  const {data: heroes = []} =  useQuery({
    queryKey: ['search', {name, strength}],
    queryFn: () => searchHeroesAction({name, strength}),
    staleTime: 1000 * 60 * 5, // 5 minutos sera considerada fresca
  });

  return (
    <>
      <CustomJumbotron 
        title="Buscando superheroes"
        description="Descubre, explora y administra super heroes y villanos"
      />

      <CustomBreadcrumbs currentPage='Buscador de heroes' 
      // breadcrumbs={[
      //     { label: 'Hombe', to: '/'},
      //     { label: 'Hombe2', to: '/'},
      //     { label: 'Hombe3', to: '/'},
      //   ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControls />

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;