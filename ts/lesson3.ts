import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

// const apiURL = 'https://swapi.dev/api/people/';
// const personId = 1;

function logInfoFromApi(apiData: Observable<AjaxResponse<unknown>>) {
  apiData.subscribe({
    next: (res) => {
      console.log(res.responseHeaders, res.request, res.status, res.response);
    },
    error: (err) => {
      console.error('Error: ' + err + ', can not get data from api!');
    },
    complete() {
      console.log('Got data from api successfully!');
    },
  });
}

function getDataFromApi(url: string, id: number, callback) {
  // Create an observable out of a promise
  const apiData = ajax(url + `${id}`);
  // Subcribe to begin listening for async result
  callback(apiData);
}

export { getDataFromApi, logInfoFromApi };
