import { Component, OnInit, Inject, Input } from '@angular/core';

import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { ActivatedRoute } from '@angular/router';
import { NgFor, DatePipe } from '@angular/common';

@Component({
    selector: 'app-blogcategory',
    templateUrl: './blog-category.component.html',
    imports: [NgFor, DatePipe]
})
export class BlogCategoryComponent implements OnInit {

  public Category: string;
  public FiltertedBlogEntry: BlogEntry[];
  constructor(@Inject('IBlogService') private blogService: IBlogService, private route: ActivatedRoute) {
    this.FiltertedBlogEntry = [];
    this.Category = "";
    this.FiltertedBlogEntry = [];
    this.Category = this.route.snapshot.paramMap.get("category") ?? "";

    if (this.Category != null) {
      // if (this.Category.endsWith('.html')) {
      //   this.Category = this.Category.replace('.html', '');
      // }
      this.Category = decodeURIComponent(this.Category);
    }
  }
  public async ngOnInit() {
    const blogEntries = await this.blogService.GetBlogEntries(false, 0);
    this.ApplyBlogEntry(blogEntries);
  }
  protected ApplyBlogEntry(blogEntries: BlogEntry[]): void {
    for (let blogEntry of blogEntries) {
      if (blogEntry.Regards.indexOf(this.Category) > -1 ||
        (this.Category == null || this.Category == "")) {
        this.FiltertedBlogEntry.push(blogEntry);
      }
    }
  }
}
