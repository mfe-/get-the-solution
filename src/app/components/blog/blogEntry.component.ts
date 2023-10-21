import { Component, OnInit, Inject, Input } from '@angular/core';

import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { environment } from 'src/environments/environment';
import {DomSanitizer, Title} from "@angular/platform-browser";

@Component({
    selector: 'app-blogentry',
    templateUrl: './blogEntry.component.html'
  })
export class BlogEntryComponent implements OnInit {


    private _blogEntryValue: BlogEntry = new BlogEntry();

    constructor(@Inject('IBlogService') private blogService: IBlogService, private titleService:Title, private sanitizer: DomSanitizer) {
    }

    @Input() set blogEntryValue(value: BlogEntry) {
      this._blogEntryValue = value;
      this.titleService.setTitle("get-the-solution.net - "+ value.Title );
    }
    get blogEntryValue(): BlogEntry {
      return this._blogEntryValue;
    }
    public getSanitizedContent(content: string): any {
      return this.sanitizer.bypassSecurityTrustHtml(content);
    }
    public ngOnInit() {
    }

    encodeURIComponent(uri:string) { 
      return encodeURIComponent(uri);
    }
    public EditUrl() : string {
      return (environment.git +this.blogEntryValue.Source).replace(".html",".md");
    }
}
