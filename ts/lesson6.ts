// lesson 6 ============================================

import { catchError, map, of, retry } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Error handling with 'catchError()'

// Return "response" from the API.
// If an error happens, return empty array.

const url = 'https://swapi.dev/api/peoples/';
let id = 1;

const apiData = ajax(url + `${id}`).pipe(
  map((res: any) => {
    if (!res.response) {
      throw new Error('Value expected!');
    }
    return res.response;
  }),
  // retry() operator let you retry a failed request.
  // use retry() before catchError()
  // ===========================================
  // Do not retry 'authentication' requests, since these should
  // only be initiated by user action. We don't want to
  // lock out user accounts with repeated login requests
  // that the user has not initiated.
  // ===========================================
  retry(3),
  catchError(() => of([]))
);

export { apiData };
