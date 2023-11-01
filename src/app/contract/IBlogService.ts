import { Observable } from 'rxjs';
import { BlogEntry } from '../model/BlogEntry';

export interface IBlogService {
    GetBlogEntries(getContent: boolean, maxblogEntries: number): Promise<BlogEntry[]>
    GetBlogEntry(year: number, month: number, day: number, title: string, blogEntries: BlogEntry[]): Promise<BlogEntry>;
}