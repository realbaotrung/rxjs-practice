import { timer, of, map, Observable, Observer } from 'rxjs';

// lesson 1 ============================================
const myObservable = of('World', 'Obervable');

const observer2 = {
  next: (name: string) => console.log(`observer2: Hello, ${name}2`),
  error: (err: Error) => console.error('Observer got an error: ' + err),
  complete: () => console.log('observer2: Complete!'),
};

// This called method below is deprecated.
// myObservable.subscribe(
//   (name: string) => console.log(`observer3: Hello, ${name}3`),
//   (err: Error) => console.error('Observer got an error: ' + err),
//   () => console.log('observer3: Complete!')
// );

export { myObservable, observer2 };
