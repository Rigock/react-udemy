

const characterNames = ['Goku',' Vegeta', 'Trunks'];

const [, , Truchas] = characterNames

console.log({ Truchas });


const returnsArrayFn = () => {
  return ['ABC', 123] as const
}

const [letters, numbers] = returnsArrayFn();
console.log({letters, numbers });

//TAREA.....>>

const useState = (name: string) => {
  return [name, (newName: string)=> {
    console.log(newName);
  }] as const
}
const [name, setName]= useState('Goku')
console.log({ name });
setName('Vegeta');