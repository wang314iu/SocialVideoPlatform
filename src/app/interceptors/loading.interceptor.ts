import { inject } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandlerFn } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

let requestCnt = 0;
export function LoadingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const loader = inject(LoadingService);

  requestCnt++;
  loader.open();

  return next(req).pipe(
    finalize(() => {
      requestCnt--;
      requestCnt === 0 && loader.close();
    })
  );
}
