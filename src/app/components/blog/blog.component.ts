import { Component, OnInit, Inject } from '@angular/core';
import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(@Inject('IBlogService') private blogService: IBlogService, private route: ActivatedRoute) {

  }
  public ngOnInit() {
    let year = this.route.snapshot.paramMap.get("year");
    let month = this.route.snapshot.paramMap.get("month");
    let day = this.route.snapshot.paramMap.get("day");
    if (year != null && month != null && day != null) {
      this.blogService.GetBlogEntries(false).subscribe(this.ApplyBlogEntry.bind(this));
    }
    else {
      this.blogService.GetBlogEntries(true).subscribe(this.ApplyBlogEntry.bind(this));
    }
  }
  protected Get
  protected ApplyBlogEntry(blogEntries: BlogEntry[]): void {
    let title = this.route.snapshot.paramMap.get("title");
    let year = this.route.snapshot.paramMap.get("year");
    let month = this.route.snapshot.paramMap.get("month");
    let day = this.route.snapshot.paramMap.get("day");
    this.BlogEntry = blogEntries;
    if (title != null || (year != null && month != null && day != null)) {
      let blogentry: BlogEntry = null;
      if ((year != null && month != null && day != null)) {
        blogentry = this.blogService.GetBlogEntry(+year, +month, +day, title, blogEntries);
      }
      else {
        blogentry = this.blogService.GetBlogEntry(0, 0, 0, title, blogEntries);
      }
      
      if (blogentry != undefined) {
        this.BlogEntry = [blogentry];
      }

    }

  }
  public BlogEntry: BlogEntry[];

  ngOnDestroy() {

  }

}
