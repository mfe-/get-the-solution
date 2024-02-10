import { Inject, Injectable, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IBlogService } from '../contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { firstValueFrom } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { environment } from '../app.config';

@Injectable()
export class BlogService implements IBlogService {

    // 2) CREATE A STATE KEY
    private MY_BLOGDATA = makeStateKey<BlogEntry[]>('blog.json');

    private readonly baseUri: string = "assets/database/blog.json";
    public BlogEntry: BlogEntry[];
    constructor(protected httpClient: HttpClient, private state: TransferState, @Inject(PLATFORM_ID) private platformId: Object) {
        this.BlogEntry = [];
    }

    public async GetBlogEntries(getContent: boolean = true, maxblogEntries: number = 0): Promise<BlogEntry[]> {

        // 4) CHECK TO SEE IF DATA EXISTS
        const store = this.state.get(this.MY_BLOGDATA, null);
        // 5) IF DATA EXISTS, RETURN DATA. THIS IS EXECUTED ON THE CLIENT
        if (store) {
            return store;
        }
        // 6) DATA DOES NOT EXIST. MAKE HTTP CALL. THIS IS EXECUTED ON THE SERVER
        //if the request is performed server side it cannot work with relative urls like "assets/database/blog.json" we need to set the full url
        let bloguri = environment.baseUri + this.baseUri;
        let observable = this.httpClient.get<BlogEntry[]>(bloguri)

        // Convert the Observable to a Promise and await the response
        let blogEntriesResult = await firstValueFrom(observable);

        for (let blogEntry of blogEntriesResult) {
            if (!blogEntry.Content && getContent && maxblogEntries > 0) {
                // async load of blog entry content
                let contentResult = await this.getBlogEntryContent(blogEntry);
                blogEntry.Content = contentResult;
            }
            maxblogEntries--;
        }
        // 7) SET STATE KEY SO THAT CLIENT CAN USE IT IN A SUBSEQUENT ACTION
        this.state.set(this.MY_BLOGDATA, blogEntriesResult);
        return blogEntriesResult;
    }

    public async GetBlogEntry(year: number, month: number, day: number, title: string, blogEntries: BlogEntry[], getContent: boolean = true): Promise<BlogEntry> {
        let blogEntry: BlogEntry | null = null;
        if (year != 0 || month != 0 || day != 0) {
            blogEntry = blogEntries.find(b =>
                b.Release != null &&
                new Date(b.Release).getFullYear() == year &&
                new Date(b.Release).getMonth() == (month - 1) &&
                new Date(b.Release).getDate() == day) ?? null;
        }
        else {
            blogEntry = blogEntries.find(b => {
                return (b.Title.toLowerCase() == decodeURI(title.toLowerCase())
                    //replace all " " with "-"
                    || b.Title.replace(/\ /g, "-").toLowerCase() == title.toLowerCase());
            }) ?? null;
        }

        if (blogEntry != null && !blogEntry.Content && getContent) {
            // async load of blog entry content
            var content = await this.getBlogEntryContent(blogEntry);
            blogEntry.Content = content;
        }
        return blogEntry ?? new BlogEntry();
    }

    public async getBlogEntryContent(blogEntry: BlogEntry): Promise<string> {
        if (blogEntry.Source) {
            //if the request is performed server side it cannot work with relative urls like "assets/database/blog.json" we need to set the full url
            if (!blogEntry.Source.startsWith("http://") && !blogEntry.Source.startsWith("https://")) {
                blogEntry.Source = encodeURI(environment.baseUri + blogEntry.Source);
            }
            if (isPlatformServer(this.platformId)) {
                console.log(blogEntry.Source);
            }
            let contentObservable = this.httpClient.get(blogEntry.Source, { responseType: 'text' });
            return await firstValueFrom(contentObservable);
        }
        throw new Error("No content found for blog entry");
    }
}
