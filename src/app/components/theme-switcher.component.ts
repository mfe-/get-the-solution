import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
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
    this.currentCssFile = this.getCssLink();
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
        newlink.setAttribute("src", cssLink);
        links[i].setAttribute("href", cssLink);
        // document.getElementsByTagName("head").item(0).replaceChild(newlink, links[i]);

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
