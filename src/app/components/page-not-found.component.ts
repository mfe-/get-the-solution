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
  private readonly REGEXLINKPAGE: string = "index-[0-9]+-[0-9]+-(.+)";

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
          pagetitle = decodeURI(pagetitle).toLowerCase();
          if (pagetitle.includes("image resizer")) {
            this.router.navigate(["/projects"]);
          }
          else if (pagetitle.includes("blog")) {
            this.router.navigate(["/blog"]);
          } 
          else if (pagetitle.includes("privacy") && pagetitle.includes("policy")) {
            this.router.navigate(["/privacy"]);
          } 
          else if (pagetitle.includes("impressum")) {
            this.router.navigate(["/impressum"]);
          } 
          else if (pagetitle.includes("kontakt") || pagetitle.includes("team")) {
            this.router.navigate(["/contact"]);
          } 
          else if (pagetitle.includes("c#") && pagetitle.includes("plugins") 
          && pagetitle.includes("appdo")) {
            this.router.navigate(["/2010/08/23/c-plugins-mit-appdomains-realisieren"]);
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