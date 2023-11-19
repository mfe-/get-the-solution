import { Component, OnInit, Inject, Input, PLATFORM_ID, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { environment } from 'src/environments/environment';
import { DomSanitizer, Title } from "@angular/platform-browser";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-blogentry',
  templateUrl: './blogEntry.component.html'
})
export class BlogEntryComponent implements OnInit {
  private _blogEntryValue: BlogEntry = new BlogEntry();

  constructor(@Inject('IBlogService') private blogService: IBlogService, private titleService: Title, private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) public platformId: Object) {
  }


  @Input() set blogEntryValue(value: BlogEntry) {
    this._blogEntryValue = value;
    this.titleService.setTitle("get-the-solution.net - " + value.Title);
  }
  get blogEntryValue(): BlogEntry {
    return this._blogEntryValue;
  }
  /**
   * Calls bypassSecurityTrustHtml to sanitize the html content to allow displaying it
   * Remarks: When this method is binded to the innerHtml property of a html element, the method can get called several times
   * @param content The html content which should be displayed
   * @returns 
   */
  public getSanitizedContent(content: string): any {
    if (isPlatformServer(this.platformId)) {
      console.log("sanitize content" + this.platformId);
      return this.sanitizer.bypassSecurityTrustHtml(content);
    }
    return content;
  }
  public ngOnInit() {

  }
  encodeURIComponent(uri: string) {
    return encodeURIComponent(uri);
  }
  public EditUrl(): string {
    if (this.blogEntryValue.Source.startsWith("http://") || this.blogEntryValue.Source.startsWith("https://")) {
      let editUrl = this.blogEntryValue.Source.replace(environment.baseUri, "");
      editUrl = environment.git + editUrl.replace(".html", ".md");
      return editUrl;
    }
    else {
      return (environment.git + this.blogEntryValue.Source).replace(".html", ".md");
    }
  }
}
