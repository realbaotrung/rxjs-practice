import { interval, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
const takeFiveSeconds = secondsCounter.pipe(take(5));
const hoursCounter = secondsCounter;

export { takeFiveSeconds, hoursCounter };
