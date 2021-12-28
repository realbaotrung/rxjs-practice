import './style.css';
import * as Ls1 from './ts/lesson1';
import * as Ls2 from './ts/lesson2';
import * as Ls21 from './ts/lesson21';
import * as Ls3 from './ts/lesson3';
import * as Ls4 from './ts/lesson4';
import * as Ls5 from './ts/lesson5';
import * as Ls6 from './ts/lesson6';
import { timer, of, map, Observable, Observer, fromEvent } from 'rxjs';

// lesson 1 ============================================

// Ls1.myObservable
//   .pipe(map((name) => `observer1: Hello, ${name}1`))
//   .subscribe(console.log);
// Ls1.myObservable.subscribe(Ls1.observer2);

// lesson 2 ============================================

// Create a new Observable that will deliver the sequence in lesson2.ts
// const sequence = new Observable(Ls2.sequenceSubscribers);

// const observer1 = {
//   next(num) {
//     console.log('1st subscribe: ' + num);
//   },
//   complete() {
//     console.log('1st sequence finished.');
//   },
// };
// const observer2 = {
//   next: (num) => {
//     console.log('2nd subscribe: ' + num + '.5s');
//   },
//   complete: () => {
//     console.log('2nd sequence finished.');
//   },
// };

// // Subscribe starts the clock, and will emit after 1 second
// sequence.subscribe(observer1);
// // After 1/2 second, subscribe again.
// setTimeout(() => {
//   sequence.subscribe(observer2);
// }, 500);

// lesson 2.1 ============================================

// Create a new Observable that will deliver the sequence in 'lesson21.ts'
// const multicastSequence = new Observable(Ls21.multicastSequenceSubscriber());

// // Subscribe starts the clock, and begins to emit after 1 second
// multicastSequence.subscribe({
//   next(num) {
//     console.log('1st subscribe: ' + num);
//   },
//   complete() {
//     console.log('1st sequence finished.');
//   },
// });

// // After 1 1/2 seconds, subscribe again (should "miss" the first value).
// setTimeout(() => {
//   multicastSequence.subscribe({
//     next(num) {
//       console.log('2nd subscribe: ' + num);
//     },
//     complete() {
//       console.log('2nd sequence finished.');
//     },
//   });
// }, 2000);

// lesson 3 ============================================

// const apiURL = 'https://swapi.dev/api/people/';
// const personId = 1;

// Ls3.getDataFromApi(apiURL, personId, Ls3.logInfoFromApi);

// lesson 4 ============================================

// Ls4.takeFiveSeconds.subscribe({
//   next(res) {
//     console.log(res);
//   },
//   complete() {
//     console.log(`Everything is done!`);
//   },
// });

// ----------------------
// Create a time counter
// ----------------------
// Ls4.hoursCounter.subscribe({
//   next: () => {
//     const date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     console.log(`${hours}:${minutes}:${seconds}`);
//   }
// });

// lesson 5 ============================================

// 1. listen with Object inside subscribe() methed.

// Ls5.squareNums.subscribe({
//   next(res) {
//     console.log(res);
//   },
// });

// 2. listen with Listener Function inside subscribe() methed.
// Ls5.squareNums.subscribe((res) => listenerSquareNums(res));

// function listenerSquareNums(respose) {
//   console.log(respose);
// }

// Ls5.squareOdd.subscribe({
//   next(res) {
//     console.log(res);
//   },
// });

// lesson 6 ============================================

// const apiURL = 'https://swapi.dev/api/people/';
// const personId = 1;

// Ls6.apiData.subscribe({
//   next: (x) => {
//     console.log('data: ', x);
//   },
//   error: () => {
//     console.log('error already caught... will not run');
//   },
// });
