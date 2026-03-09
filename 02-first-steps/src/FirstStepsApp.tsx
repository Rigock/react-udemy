import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {productName: 'Nintendo Switch 2', quantity:1 },
  {productName: 'JoyCons', quantity:2 },
  {productName: 'Juegos', quantity:6 },
]


export function FirstStepsApp(){
  return(
    <>
      <h1>Carrito de Compras</h1>
      {
        itemsInCart.map( ({productName, quantity}) => (
          <ItemCounter key={productName} name={productName} quantity={quantity} />
        ))
      }
      {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
      <ItemCounter name="JoyCons" quantity={1} />
      <ItemCounter name="Juegos" quantity={5} /> */}
      
    </>
  )
}