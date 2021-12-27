import { of } from 'rxjs';

// recommended
of([1, 2, 3]).subscribe((v) => console.info(v));

// also recommended
of([1, 2, 3]).subscribe({
  next: (v) => console.log(v),
  error: (e) => console.error(e),
  complete: () => console.info('complete'),
});
