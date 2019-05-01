import { Observable } from 'rxjs';
import { BlogEntry } from '../model/BlogEntry';

export interface IBlogService
{
    GetBlogEntries(getContent: boolean): Observable<BlogEntry[]>
    GetBlogEntry(year: number, month: number, day: number, title: string, blogEntries: BlogEntry[]) : BlogEntry;
}