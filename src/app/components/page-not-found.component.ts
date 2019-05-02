import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlogService } from '../contract/IBlogService';
import { BlogEntry } from '../model/BlogEntry';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: []
})
export class PageNotFoundComponent implements OnInit {
  private readonly REGEXLINK: string = "index-blog-[0-9]+-[0-9]+-([0-9]+)-.+";
  constructor(private route: ActivatedRoute, private router: Router, @Inject('IBlogService') private blogService: IBlogService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('p');
    let autoforward = true;
    if (id == null) {
      this.Link = "/home";
    }
    else {
      //check if the link was from the predecessor website get-the-solution.net v1
      let regeex = new RegExp(this.REGEXLINK);
      if (regeex.test(id)) {
        let regexmatch = regeex.exec(id);
        if (regexmatch.length > 1) {
          //we found the id
          let blogid = +regexmatch[1];
          autoforward = false;
          this.blogService.GetBlogEntries(false).subscribe((b: BlogEntry[]) => {
            let blogentry: BlogEntry = b.find((blog) => blog.BlogEntryId == blogid);
            this.Link = "/blog/" + blogentry.Title;
            this.router.navigate([this.Link]);
          });
        }
      }

      this.Link = "/" + this.route.snapshot.paramMap.get('p');
    }
    if (autoforward) {
      this.router.navigate([this.Link]);
    }
  }
  public Link: string;


}