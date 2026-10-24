import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { ActivatedRoute } from '@angular/router';
import { NgFor, DatePipe, NgIf } from '@angular/common';

@Component({
    selector: 'app-blogcategory',
    standalone: true,
    templateUrl: './blog-category.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgFor, NgIf, DatePipe]
})
export class BlogCategoryComponent implements OnInit {

  public Category: string;
  public FiltertedBlogEntry: BlogEntry[];
  constructor(@Inject('IBlogService') private blogService: IBlogService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.FiltertedBlogEntry = [];
    this.Category = "";
    this.FiltertedBlogEntry = [];
    this.Category = this.route.snapshot.paramMap.get("category") ?? "";

    if (this.Category != null) {
      this.Category = decodeURIComponent(this.Category);
    }
  }
  public async ngOnInit() {
    const blogEntries = await this.blogService.GetBlogEntries(false, 0);
    this.ApplyBlogEntry(blogEntries);
  }
  protected ApplyBlogEntry(blogEntries: BlogEntry[]): void {
    this.FiltertedBlogEntry = blogEntries.filter((blogEntry) => {
      return blogEntry.Regards?.includes(this.Category) || (this.Category == null || this.Category == "");
    });
    this.cdr.detectChanges();
  }
}
