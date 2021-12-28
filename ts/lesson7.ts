import { concat, fromEvent, interval, range } from 'rxjs';
import { map, mergeWith, take } from 'rxjs/operators';

// ==================================
// concat(a$, b$, c$) is the same as a$.pipe(concatWith(b$, c$)).
// ==================================
const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe((x) => console.log(x));

// results in:
// 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10

// ==================================
// "MergeWith" (like concat but -- Concurrently --) the values from all observables to an single observable result
// ==================================
const clicks$ = fromEvent(document, 'click').pipe(map(() => 'click'));
const mousemoves$ = fromEvent(document, 'mousemove').pipe(
  map(() => 'mousemove')
);
const dblclicks$ = fromEvent(document, 'dblclick').pipe(map(() => 'dblclick'));

mousemoves$
  .pipe(mergeWith(clicks$, dblclicks$))
  .subscribe((x) => console.log(x));
