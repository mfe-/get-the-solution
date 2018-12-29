import { Component, OnInit, Inject } from '@angular/core';
import { IBlogService } from 'src/app/contract/IBlogService';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(@Inject('IBlogService') private blogService: IBlogService) {
    console.log(blogService);
  }
  ngOnInit() {
  }

}
