import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, makeStateKey, TransferState } from "@angular/core";

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

    constructor(private transferState: TransferState) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event => {
                if ((event instanceof HttpResponse && (event.status === 200 || event.status === 202))) {
                    this.transferState.set(makeStateKey(req.url), event.body);
                }
            }),
        );
    }
}