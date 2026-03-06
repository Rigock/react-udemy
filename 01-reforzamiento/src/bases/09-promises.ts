


const myPromise = new Promise<Number>( (resolve, reject) => {
  setTimeout(() => {
    //! yo quiero mi dinero!!!
    // resolve(100);
    reject('Esa platica se perdioooo')
  }, 2000);
}); 

myPromise.then(
  (myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  }
).catch( reason => {
  console.warn(reason)
}).finally(() => {
  console.log('Bueno, a seguir!');
})
