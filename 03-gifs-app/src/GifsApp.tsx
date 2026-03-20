import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GifList } from './gifs/components/GifList';
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  
  const {previousTerms, gifs, handleTermCLicked, handleSearch} = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />
      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" 
      onQuery={handleSearch} />
      {/* Busquedas previas */}
      <PreviousSearches searches={previousTerms}
       onLabelClicked={handleTermCLicked} />
      {/* Gifs */}
      {/* GifList */}
      <GifList gifs={gifs} />
    </>
  )
}
