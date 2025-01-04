import { Component, OnInit, Inject } from '@angular/core';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntryComponent } from './blogEntry.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    imports: [NgFor, BlogEntryComponent, NgIf, RouterLink]
})
export class BlogComponent implements OnInit {

  public loadedBlogEntries = 0;
  protected maxloadBlogEntries = 5;
  public BlogEntry: BlogEntry[];
  public FiltertedBlogEntry: BlogEntry[];
  constructor(@Inject('IBlogService') private blogService: IBlogService, private route: ActivatedRoute) {
    this.BlogEntry = [];
    this.FiltertedBlogEntry = [];
  }
  public async ngOnInit() {
    //check how to load the blog entries
    let year = this.route.snapshot.paramMap.get("year");
    let month = this.route.snapshot.paramMap.get("month");
    let day = this.route.snapshot.paramMap.get("day");
    if (year != null && month != null && day != null) {
      const promiseblogEntries = await this.blogService.GetBlogEntries(false, 0);
      this.ApplyBlogEntry(promiseblogEntries);
    }
    else {
      const promiseblogEntries = await this.blogService.GetBlogEntries(true, this.maxloadBlogEntries);
      this.ApplyBlogEntry(promiseblogEntries);
    }
  }
  protected async ApplyBlogEntry(blogEntries: BlogEntry[]): Promise<void> {
    let title = this.route.snapshot.paramMap.get("title");
    // if (title) {
    //   if (title.endsWith('.html')) {
    //     title = title.replace('.html', '');
    //   }
    // }
    let year = this.route.snapshot.paramMap.get("year");
    let month = this.route.snapshot.paramMap.get("month");
    let day = this.route.snapshot.paramMap.get("day");
    this.BlogEntry = blogEntries;
    if (title != null || (year != null && month != null && day != null)) {
      let blogentry: BlogEntry | undefined = undefined;
      if ((year != null && month != null && day != null)) {
        blogentry = await this.blogService.GetBlogEntry(+year!, +month!, +day!, title!, blogEntries);
      }
      else {
        blogentry = await this.blogService.GetBlogEntry(0, 0, 0, title!, blogEntries);
      }
      if (blogentry != undefined) {
        this.BlogEntry = [blogentry];
      }
    }
    if (this.loadedBlogEntries < this.maxloadBlogEntries) {
      for (let blogEntry of this.BlogEntry) {
        if (this.loadedBlogEntries < this.maxloadBlogEntries) {
          this.FiltertedBlogEntry.push(blogEntry);
          this.loadedBlogEntries++;
        }
      }
    }
  }
  public async AddBlogEntry() {
    if (this.maxloadBlogEntries < this.BlogEntry.length) {
      this.maxloadBlogEntries++;
      if (this.BlogEntry.length > this.loadedBlogEntries) {
        let blogEntry = this.BlogEntry[this.loadedBlogEntries];
        if (blogEntry.Content == null) {
          await this.blogService.GetBlogEntry(0, 0, 0, blogEntry.Title, this.BlogEntry);
        }

        this.FiltertedBlogEntry.push(this.BlogEntry[this.loadedBlogEntries]);
        this.loadedBlogEntries++;
      }
      else {
        alert("empty");
      }

    }
  }
  ngOnDestroy() {

  }

}
