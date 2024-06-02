import { inject } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandlerFn } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export function LoadingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  return next(req);
}
