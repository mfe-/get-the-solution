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
  private readonly REGEXLINKBLOG: string = "index-blog-[0-9]+-[0-9]+-([0-9]+)-.+";
  private readonly REGEXLINKPAGE: string = "index-[0-9]+-[0-9]+-(.+).html";

  constructor(private route: ActivatedRoute, private router: Router, @Inject('IBlogService') private blogService: IBlogService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('p');
    let autoforward = true;
    if (id == null) {
      this.Link = "/home";
    }
    else {
      //check if the link was from the predecessor website get-the-solution.net v1
      //example index-blog-1-14-52-Einführung-in-die-Programmierung
      let regeex = new RegExp(this.REGEXLINKBLOG);
      if (regeex.test(id)) {
        let regexmatch = regeex.exec(id);
        if (regexmatch.length > 1) {
          //we found the blog id
          let blogid = +regexmatch[1];
          autoforward = false;
          this.blogService.GetBlogEntries(false).subscribe((b: BlogEntry[]) => {
            let blogentry: BlogEntry = b.find((blog) => blog.BlogEntryId == blogid);
            if (blogentry != null) {
              this.Link = "/blog/" + blogentry.Title;
              this.router.navigate([this.Link]);
            }
          });
        }
      }
      //example index-1-3-Image Resizer.html
      regeex = new RegExp(this.REGEXLINKPAGE);
      if (regeex.test(id)) {
        let regexmatch = regeex.exec(id);
        if (regexmatch.length > 1) {
          //we got the page title
          let pagetitle = regexmatch[1];
          autoforward = false;
          pagetitle = decodeURI(pagetitle);
          if (pagetitle.toLowerCase().includes("image resizer")) {
            this.router.navigate(["/projects"]);
          }
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