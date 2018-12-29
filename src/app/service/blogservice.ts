import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBlogService } from '../contract/IBlogService';



@Injectable()
export class BlogService implements IBlogService
{
    constructor(protected httpClient: HttpClient) {}
}