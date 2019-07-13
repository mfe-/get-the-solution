import { Component, OnInit, Inject, Input } from '@angular/core';

import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { ActivatedRoute } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-blogcategory',
  templateUrl: './blog-category.component.html'
})
export class BlogCategoryComponent implements OnInit {

  public Category: string;
  public FiltertedBlogEntry: BlogEntry[];
  constructor(@Inject('IBlogService') private blogService: IBlogService, private route: ActivatedRoute) {
    this.FiltertedBlogEntry = [];
    this.Category = this.route.snapshot.paramMap.get("category");
  }
  public ngOnInit() {
    this.blogService.GetBlogEntries(false).subscribe(this.ApplyBlogEntry.bind(this));
  }
  protected ApplyBlogEntry(blogEntries: BlogEntry[]): void {
    for (let blogEntry of blogEntries) {
      if (blogEntry.Regards.indexOf(this.Category) > -1 ||
        (this.Category == null || this.Category == "") ) {
        this.FiltertedBlogEntry.push(blogEntry);
      }
    }
  }
}
