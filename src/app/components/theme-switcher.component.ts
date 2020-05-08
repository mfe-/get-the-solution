import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  template: '<a [routerLink]="" queryParamsHandling="preserve" '
  +'(click)="switch()">{{currentCssFile==defaultCssFile ? \'Turn Light off\' : \'Turn Light on\'}}</a>',
  styles: [
  ],
})
export class ThemeSwitcherComponent implements OnInit {

  @Input()
  defaultCssFile: string;
  @Input()
  switchCssFile: string;

  currentCssFile: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.defaultCssFile = this.getCssLink();
    this.currentCssFile = this.defaultCssFile;
  }

  public getCssLink(): string {
    var i = 0;
    var links = document.getElementsByTagName("link");
    for (i; i < links.length; i++) {
      if (links[i].getAttribute("rel") == "stylesheet") {
        return links[i].getAttribute("href");
      }
    }
  }
  public setCssLink(cssLink: string) {
    var i = 0;
    var links = document.getElementsByTagName("link");
    for (i; i < links.length; i++) {
      if (links[i].getAttribute("rel") == "stylesheet") {
        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssLink);
        document.getElementsByTagName("head").item(0).replaceChild(newlink, links[i]);
        return;
      }
    }
  }
  ngOnInit(): void {
  }
  switch(): void {
    var newCss = this.currentCssFile == this.defaultCssFile ? this.switchCssFile : this.defaultCssFile;
    this.setCssLink(newCss);
    this.currentCssFile = newCss;
  }

}
