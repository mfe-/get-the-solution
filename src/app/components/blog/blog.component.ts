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
    this.blogService.GetBlogEntries().subscribe(this.ApplyBlogEntry.bind(this));
  }
  protected ApplyBlogEntry(blogEntries: BlogEntry[]): void {
    var title = this.route.snapshot.paramMap.get("title");
    this.BlogEntry = blogEntries;
    if (title != null) {
      var blogentry = this.blogService.GetBlogEntry(0, 0, 0, title, blogEntries);
      if (blogentry != undefined) {
        this.BlogEntry = [blogentry];
      }

    }

  }
  public BlogEntry: BlogEntry[];

  ngOnDestroy() {

  }

}
