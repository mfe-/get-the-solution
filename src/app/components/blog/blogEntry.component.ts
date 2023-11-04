import { Component, OnInit, Inject, Input, PLATFORM_ID, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { environment } from 'src/environments/environment';
import {DomSanitizer, Title} from "@angular/platform-browser";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
    selector: 'app-blogentry',
    templateUrl: './blogEntry.component.html'
  })
export class BlogEntryComponent implements OnInit, AfterViewInit {
    @ViewChild('templateRefName') templateRefName: ElementRef | null = null;

    private _blogEntryValue: BlogEntry = new BlogEntry();

    constructor(@Inject('IBlogService') private blogService: IBlogService, private titleService:Title, private sanitizer: DomSanitizer,
      @Inject(PLATFORM_ID) private platformId: Object) {
    }


    @Input() set blogEntryValue(value: BlogEntry) {
      this._blogEntryValue = value;
      this.titleService.setTitle("get-the-solution.net - "+ value.Title );
    }
    get blogEntryValue(): BlogEntry {
      return this._blogEntryValue;
    }
    public getSanitizedContent(content: string): any {
      console.log("execute sanitize");
      if (isPlatformServer(this.platformId)) {
        console.log("sanitize content");
        return this.sanitizer.bypassSecurityTrustHtml(content);
      }
      return content;
    }
    public ngOnInit() {

    }
    public ngAfterViewInit() {
     /*console.log(this.templateRefName);
     console.log(isPlatformServer(this.platformId));
      if(this.templateRefName != null && isPlatformServer(this.platformId)){
        this.templateRefName.nativeElement.innerHTML = this._blogEntryValue.Content;
      }*/
    }

    encodeURIComponent(uri:string) { 
      return encodeURIComponent(uri);
    }
    public EditUrl() : string {
      return (environment.git +this.blogEntryValue.Source).replace(".html",".md");
    }
}
