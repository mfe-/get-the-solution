import { Component, OnInit, Inject } from '@angular/core';
import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(@Inject('IBlogService') private blogService: IBlogService) {

  }
  public ngOnInit() {
    this.blogService.GetBlogEntries().subscribe(this.ApplyBlogEntry.bind(this));
  }
  protected ApplyBlogEntry(blogEntries: BlogEntry[]): void {
    this.BlogEntry = blogEntries;
  }
  public BlogEntry: BlogEntry[];

}
