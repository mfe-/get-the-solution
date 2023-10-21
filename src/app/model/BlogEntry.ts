export class BlogEntry {
    constructor() { 
        this.Author = '';
        this.Title = '';
        this.Release = new Date();
        this.Regards = [];
        this.Content = '';
        this.Source = '';
    }
    BlogEntryId = 0;
    Author: string;
    Title: string;
    Release: Date;
    Regards: string[];
    Content: string;
    Source: string;
}