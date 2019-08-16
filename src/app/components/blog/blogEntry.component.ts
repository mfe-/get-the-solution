import { Component, OnInit, Inject, Input } from '@angular/core';

import { IBlogService } from 'src/app/contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';

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

    encodeURI(uri:string) { 
      return encodeURI(uri);
    }
}
