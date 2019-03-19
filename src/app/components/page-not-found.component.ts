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
    let id = this.route.snapshot.paramMap.get('p');
    if (id == null) {
      this.Link = "/home";
      this.router.navigate([this.Link])
    }
    else {
      this.Link = "/" + this.route.snapshot.paramMap.get('p');
      console.log(id);
      let url = this.router.parseUrl(id);
    }
  }
  public Link: string;


}