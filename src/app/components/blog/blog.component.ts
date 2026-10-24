import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntryComponent } from './blogEntry.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgFor, BlogEntryComponent, NgIf, RouterLink]
})
export class BlogComponent implements OnInit {

  public loadedBlogEntries = 0;
  protected maxloadBlogEntries = 5;
  public BlogEntry: BlogEntry[];
  public FiltertedBlogEntry: BlogEntry[];
  constructor(@Inject('IBlogService') private blogService: IBlogService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.BlogEntry = [];
    this.FiltertedBlogEntry = [];
  }
  public async ngOnInit() {
    const year = this.route.snapshot.paramMap.get("year");
    const month = this.route.snapshot.paramMap.get("month");
    const day = this.route.snapshot.paramMap.get("day");
    const title = this.route.snapshot.paramMap.get("title");

    if (year != null && month != null && day != null) {
      const blogEntries = await this.blogService.GetBlogEntries(false, 0);
      await this.ApplyBlogEntry(blogEntries, title ?? "", year, month, day);
      return;
    }

    const blogEntries = await this.blogService.GetBlogEntries(true, this.maxloadBlogEntries);
    await this.ApplyBlogEntry(blogEntries, title ?? "", year ?? "0", month ?? "0", day ?? "0");
  }
  protected async ApplyBlogEntry(blogEntries: BlogEntry[], title: string, year: string, month: string, day: string): Promise<void> {
    let filteredBlogEntry: BlogEntry[] = blogEntries;

    if (title != null && title !== "") {
      const blogEntry = await this.blogService.GetBlogEntry(
        year === "0" ? 0 : +year,
        month === "0" ? 0 : +month,
        day === "0" ? 0 : +day,
        title,
        blogEntries
      );

      if (blogEntry != null && blogEntry.Title) {
        filteredBlogEntry = [blogEntry];
      }
    }

    this.BlogEntry = filteredBlogEntry;
    this.FiltertedBlogEntry = filteredBlogEntry.slice(0, Math.min(this.maxloadBlogEntries, filteredBlogEntry.length));
    this.loadedBlogEntries = this.FiltertedBlogEntry.length;
    this.cdr.detectChanges();
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
        this.cdr.detectChanges();
      }
      else {
        alert("empty");
      }

    }
  }

  ngOnDestroy() {

  }

}
