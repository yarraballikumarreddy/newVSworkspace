// function foo() {
//   console.log('Hello');
//   return 42;
// }

// const x = foo.call(); // same as foo()
// console.log(x);
// const y = foo.call(); // same as foo()
// console.log(y);
// const w =foo();
// console.log(`"wwwww"+${w}`)




const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
 
range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));





























