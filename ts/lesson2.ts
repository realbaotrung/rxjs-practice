import { timer, of, map, Observable, Observer } from 'rxjs';

// lesson 2 ============================================
// Create a delay second
function sequenceSubscribers(observer: Observer<number>) {
  const seq = [1, 2, 3];
  let timeoutId: unknown;

  // will run through an array of numbers, emitting one value
  // per second until it gets to the end of the array.
  function doInSequence(arr: number[], index: number) {
    const length = arr.length - 1;
    timeoutId = setTimeout(() => {
      observer.next(arr[index]);
      if (index === length) {
        observer.complete();
      } else {
        doInSequence(arr, ++index);
      }
    }, 1000);
  }

  doInSequence(seq, 0);

  // Unsubscribe should clear the timeout to stop execution
  return {
    unsubscribe() {
      if (typeof timeoutId === 'number') {
        clearTimeout(timeoutId);
        console.log(`unsubscribe observable!`)
      }
    },
  };
}

export { sequenceSubscribers };
