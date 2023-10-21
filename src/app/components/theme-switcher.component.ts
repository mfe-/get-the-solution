import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  template: '<a [routerLink]="" queryParamsHandling="preserve" '
    + '(click)="switch()">{{currentCssFile==defaultCssFile ? \'Turn Light off\' : \'Turn Light on\'}}</a>',
  styles: [
  ],
})
/**
 * can swap the css file which is used in
 *             <link rel="stylesheet" type="text/css" href="style.css">
 * useage e.g: <app-theme-switcher [switchCssFile]="'styles.black.css'"></app-theme-switcher>
 * or 
 * switches the theme by adding a css class on the body element
 * useage e.g: <app-theme-switcher [switchCssClass]="'black'"></app-theme-switcher> 
 */
export class ThemeSwitcherComponent implements OnInit {

  @Input()
  defaultCssFile: string;
  @Input()
  switchCssFile: string="";
  /**
   * current css file which is used
   */
  currentCssFile: string;

  @Input()
  switchCssClass: string="";
  switchCssClassKey: string = "switchCssClass";

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.defaultCssFile = this.getCssLink();
    this.currentCssFile = this.defaultCssFile;
  }
  ngOnInit(): void {
    if (this.switchCssClass != undefined && this.switchCssFile != undefined) {
      throw new Error("Please set switchCssClass or switchCssFile. Can't use both combinations at the same time!");
    }
    if (localStorage.getItem(this.switchCssClassKey) != null) {
      if (localStorage.getItem(this.switchCssClassKey) != "") {
        this.currentCssFile = "";
        this.defaultCssFile = "";
        //will switch off the light
        this.switch();
      }
    }
  }
  switch(): void {
    if (this.switchCssFile != undefined) {
      var newCss = this.currentCssFile == this.defaultCssFile ? this.switchCssFile : this.defaultCssFile;
      this.setCssLink(newCss);
      this.currentCssFile = newCss;
    }
    else {
      /**
       * logic for removing and appling class to <body/> 
       * abuses cssFile variables to indicate whether the ligt is on or off (see template) 
       */
      var bodyElement = document.getElementsByTagName("body").item(0);
      if (this.currentCssFile == undefined) {
        this.currentCssFile = "";
      }
      if (this.defaultCssFile == undefined) {
        this.defaultCssFile = "";
      }
      var classValue = this.currentCssFile == this.defaultCssFile ? this.switchCssClass : "";
      if (classValue == this.switchCssClass) {
        if (bodyElement != null) {
          bodyElement.setAttribute("class", classValue);
        }
      }
      else {
        if (bodyElement != null) {
          bodyElement.removeAttribute("class");
        }
      }
      this.currentCssFile = classValue;
      localStorage.setItem(this.switchCssClassKey, this.currentCssFile);
    }

  }
  public getCssLink(): string {
    var i = 0;
    var links = document.getElementsByTagName("link");
    for (i; i < links.length; i++) {
      if (links[i].getAttribute("rel") == "stylesheet") {
        return links[i].getAttribute("href") ?? "";
      }
    }
    return "";
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
        document.getElementsByTagName("head").item(0)?.replaceChild(newlink, links[i]);
        return;
      }
    }
  }

}
