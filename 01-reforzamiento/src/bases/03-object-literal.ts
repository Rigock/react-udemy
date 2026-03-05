interface Hero {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const ironman: Hero = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: '111222',
    city: 'New York',
  },
};

const hulk: Hero = {
  firstName: 'Bruce',
  lastName: 'Banner',
  age: 48,
  address: {
    postalCode: '222134',
    city: 'Kansas',
  },
};

// const spiderman = {...ironman}; // Shallow Copy
const spiderman = structuredClone(ironman) // Deep Copy

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'Saint Jose'

console.log(ironman, hulk, spiderman);