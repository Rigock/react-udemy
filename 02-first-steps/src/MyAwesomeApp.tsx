// export function MyAwesomeApp() {
//   return (
//     <>
//       <h1>Roronoa</h1>
//       <h3>Zoro</h3>
//     </>
//   )
// }

import type { CSSProperties } from "react";

// en funcion de flecha
  const firstName = 'Roronoa';
  const lastName = 'Zoro';

  const favoriteGames = ['Elden Ring', 'My Hero', 'Prince of Persia'];

  const isActive = true;

  const address = {
    zipCode: '67671',
    country: 'Wano Kuni'
  };
  const myStyles: CSSProperties = {
          backgroundColor: '#fafafa',
          borderRadius: 20,
          padding: 10
  };

export const MyAwesomeApp = () => {
  return (
    <div data-testid="div-app">
      <h1 data-testid="first-name-title"> {firstName} </h1>
      <h3> {lastName} </h3>
      
      <p className="mi-favorita"> {favoriteGames.join(', ')} </p>

      <h1> {isActive ? 'Activo' : 'Yucas'} </h1>

      <p
        style={myStyles}
      >
         {/* {address.country} */}
         {JSON.stringify(address)}
      </p>
    </div>
  )

}