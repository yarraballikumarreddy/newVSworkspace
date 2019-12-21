
// import { interval, Subject } from 'rxjs';
// import { multicast, refCount } from 'rxjs/operators';

// const source = interval(500);
// const subject = new Subject();
// const refCounted = source.pipe(multicast(subject), refCount());
// let subscription1, subscription2;

// // This calls `connect()`, because
// // it is the first subscriber to `refCounted`
// console.log('observerA subscribed');
// subscription1 = refCounted.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });

// setTimeout(() => {
//   console.log('observerB subscribed');
//   subscription2 = refCounted.subscribe({
//     next: (v) => console.log(`observerB: ${v}`)
//   });
// }, 600);

// setTimeout(() => {
//   console.log('observerA unsubscribed');
//   subscription1.unsubscribe();
// }, 1200);

// // This is when the shared Observable execution will stop, because
// // `refCounted` would have no more subscribers after this
// setTimeout(() => {
//   console.log('observerB unsubscribed');
//   subscription2.unsubscribe();
// }, 2000);

// // Logs
// // observerA subscribed
// // observerA: 0
// // observerB subscribed
// // observerA: 1
// // observerB: 1
// // observerA unsubscribed
// // observerB: 2
// // observerB unsubscribed


// // import { BehaviorSubject } from 'rxjs';
// // const subject = new BehaviorSubject(0); // 0 is the initial value

// // subject.subscribe({
// //   next: (v) => console.log(`observerA: ${v}`)
// // });

// // subject.next(1);
// // subject.next(2);

// // subject.subscribe({
// //   next: (v) => console.log(`observerB: ${v}`)
// // });

// // subject.next(3);

// // Logs
// // observerA: 0
// // observerA: 1
// // observerA: 2
// // observerB: 2
// // observerA: 3
// // observerB: 3

// //

import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';
 
range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));