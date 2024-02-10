import { isPlatformBrowser } from '@angular/common';
import { Directive, Inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[stickyHeader]',
  standalone: true
})
export class StickHeaderDirective {

  public constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      window.onscroll = this.stickyHeader;
    }
  }
  public stickyHeader() {
    var navElement = document.getElementsByTagName("nav").item(0);

    var pElements = document.getElementsByTagName("footer").item(0)?.getElementsByTagName("p");
    if (navElement && window.pageYOffset > (navElement.offsetHeight + 20)) {

      if (pElements != null && pElements.length < 3) {
        //add new p element to avoid jumping scrollbar
        var para = document.createElement("p");
        para.setAttribute("style", "visibility:hidden;");
        var node = document.createTextNode("This is a new paragraph.");
        para.appendChild(node);
        document.getElementsByTagName("footer").item(0)?.appendChild(para);
      }
      //add sticky header css
      navElement?.classList.add("sticky");
    } else {
      //remove p
      var i = 0;
      if (pElements != null) {
        for (i; i < pElements.length; i++) {
          document.getElementsByTagName("footer").item(0)?.removeChild(pElements[i]);
        }
      }
      //remove sticky header
      navElement?.classList.remove("sticky");
    }

  }

}
