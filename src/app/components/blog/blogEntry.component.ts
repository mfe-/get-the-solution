import { Component, OnInit, Inject, Input } from '@angular/core';

import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-blogentry',
    templateUrl: './blogEntry.component.html'
  })
export class BlogEntryComponent implements OnInit {

    @Input()
    blogEntryValue: BlogEntry;

    constructor(@Inject('IBlogService') private blogService: IBlogService) {

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
