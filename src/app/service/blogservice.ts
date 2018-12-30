import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { IBlogService } from '../contract/IBlogService';

import { BlogEntry } from '../model/BlogEntry';

@Injectable()
export class BlogService implements IBlogService {

    private readonly baseUri: string = "http://localhost:4200/assets/database/index.json";

    constructor(protected httpClient: HttpClient) { }

    public GetBlogEntries(): Observable<BlogEntry[]>  {
        return this.httpClient
            .get<BlogEntry[]>(this.baseUri);
    }
}