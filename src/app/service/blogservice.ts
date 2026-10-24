import { Inject, Injectable, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';
import { isPlatformServer } from '@angular/common';

import { IBlogService } from '../contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
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

    private isRelativeAssetUrl(url: string): boolean {
        return !!url && !url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:');
    }

    private async loadJsonFromLocalAsset<T>(url: string): Promise<T | null> {
        if (!this.isRelativeAssetUrl(url) || !isPlatformServer(this.platformId)) {
            return null;
        }

        try {
            const fs = await import('node:fs/promises');
            const path = await import('node:path');
            const normalized = url.replace(/^\/+/, '');
            const candidates = [
                path.resolve(process.cwd(), normalized),
                path.resolve(process.cwd(), 'src', normalized),
                path.resolve(process.cwd(), 'dist/get-the-solution-app/browser', normalized)
            ];

            for (const candidate of candidates) {
                try {
                    const content = await fs.readFile(candidate, 'utf8');
                    return JSON.parse(content) as T;
                } catch {
                    // Try the next candidate.
                }
            }
        } catch {
            // Ignore and fall back to HttpClient.
        }

        return null;
    }

    private async loadTextFromLocalAsset(url: string): Promise<string | null> {
        if (!this.isRelativeAssetUrl(url) || !isPlatformServer(this.platformId)) {
            return null;
        }

        try {
            const fs = await import('node:fs/promises');
            const path = await import('node:path');
            const normalized = url.replace(/^\/+/, '');
            const candidates = [
                path.resolve(process.cwd(), normalized),
                path.resolve(process.cwd(), 'src', normalized),
                path.resolve(process.cwd(), 'dist/get-the-solution-app/browser', normalized)
            ];

            for (const candidate of candidates) {
                try {
                    return await fs.readFile(candidate, 'utf8');
                } catch {
                    // Try the next candidate.
                }
            }
        } catch {
            // Ignore and fall back to HttpClient.
        }

        return null;
    }

    public async GetBlogEntries(getContent: boolean = true, maxblogEntries: number = 0): Promise<BlogEntry[]> {

        const store = this.state.get(this.MY_BLOGDATA, null);
        if (store) {
            return store;
        }

        const bloguri = (environment.baseUri ?? "") + this.baseUri;
        let blogEntriesResult = await this.loadJsonFromLocalAsset<BlogEntry[]>(bloguri);

        if (blogEntriesResult === null) {
            blogEntriesResult = await firstValueFrom(this.httpClient.get<BlogEntry[]>(bloguri));
        }

        for (let blogEntry of blogEntriesResult) {
            if (!blogEntry.Content && getContent && maxblogEntries > 0) {
                let contentResult = await this.getBlogEntryContent(blogEntry);
                blogEntry.Content = contentResult;
            }
            maxblogEntries--;
        }
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
                    || b.Title.replace(/\ /g, "-").toLowerCase() == title.toLowerCase());
            }) ?? null;
        }

        if (blogEntry != null && !blogEntry.Content && getContent) {
            var content = await this.getBlogEntryContent(blogEntry);
            blogEntry.Content = content;
        }
        return blogEntry ?? new BlogEntry();
    }

    public async getBlogEntryContent(blogEntry: BlogEntry): Promise<string> {
        if (blogEntry.Source) {
            const rawSource = blogEntry.Source;
            const sourceUrl = !rawSource.startsWith('http://') && !rawSource.startsWith('https://')
                ? encodeURI((environment.baseUri ?? "") + rawSource)
                : rawSource;

            const contentFromLocalAsset = await this.loadTextFromLocalAsset(rawSource);
            if (contentFromLocalAsset !== null) {
                return contentFromLocalAsset;
            }

            return await firstValueFrom(this.httpClient.get(sourceUrl, { responseType: 'text' }));
        }
        throw new Error("No content found for blog entry");
    }
}
