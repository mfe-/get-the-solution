import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: []
})
export class PageNotFoundComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.Link = "/" + this.route.snapshot.paramMap.get('p');
    let id = this.Link;
    console.log(id);
    let url = this.router.parseUrl(id);
    // this.router.navigate(['/your-path'])

  }
  public Link: string;


}