
const person = {
  name: 'Zoro',
  age: 23,
  key: 'Swordsman',
};

const { name: nameInicial, key, age } = person;


// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({nameInicial, age, key});


interface Pirate {
  name: string;
  age: number;
  key: string;
  rank?: string;
};

const useContext = ( {key, name, age, rank}: Pirate ) => {

  return {
    keyName: key,
    user: {
      nameContext: name,
      ageContext: age,
    },
    rank
  };
};

const {
  rank,
  user: {nameContext},
  keyName
 } = useContext(person);

console.log(rank, nameContext, keyName);

// Otra forma de desestructurar cuando tienen objetos anidados>>>>
const { user } = useContext(person);
const { ageContext } = user;

console.log({ageContext});
