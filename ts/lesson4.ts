import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
const takeFiveSeconds = secondsCounter.pipe(take(5));
// Subscribe to begin publishing values
// const subscription = secondsCounter.subscribe((n) =>
//   console.log(`It's been ${n + 1} seconds since subscribing!`)
// );

export { takeFiveSeconds }