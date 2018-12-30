import { Observable } from 'rxjs';
import { BlogEntry } from '../model/BlogEntry';

export interface IBlogService
{
    GetBlogEntries(): Observable<BlogEntry[]>;
}