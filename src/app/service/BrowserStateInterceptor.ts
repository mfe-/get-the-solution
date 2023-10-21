import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, TransferState, makeStateKey } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BrowserStateInterceptor implements HttpInterceptor {

    constructor(
        private transferState: TransferState,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //check if the request was already performed on serverside
        if (req.method === 'GET') {
            const key = makeStateKey(req.url);
            const storedResponse: string | void | null = this.transferState.get(key, null);
            if (storedResponse) {
                const response = new HttpResponse({ body: storedResponse, status: 200 });
                return of(response);
            }
        }

        return next.handle(req);
    }
}