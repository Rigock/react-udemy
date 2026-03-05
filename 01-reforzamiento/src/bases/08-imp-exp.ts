import { heroes, Owner, type Hero,  } from '../data/heroes.data'



const getHeroById = (id: number): Hero | undefined => {
  const hero =  heroes.find( (hero) => {
    return hero.id === id;
  });

  // if(!hero){
  //   throw new Error(`No existe un hero con el id ${id}`)
  // }
  return hero;
}

console.log(getHeroById(5));
// TAREAA>>>
export const getHeroesByOwner = (owner: Owner) => {
  const heroesByOwner = heroes.filter((hero) => {
    return hero.owner === owner;
  } )

  return heroesByOwner;
}