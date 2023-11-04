import { Directive, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[Mathjax]'
})
/**
 * Loads Mathjax async and applies it on the used element.
 * Sample: <p Mathjax [innerHtml]="blogEntryValue.Content" />
 * where blogEntryValue.Content contains a html string with the mathjax content.
 */
export class MathjaxDirective {

    /**
     * Promise whether mathjax dependency is ready
     */
    private MathjaxPromise: Promise<boolean>= new Promise((resolve) => {});
    private MathjaxPromiseResolve: any;

    /**
     * Promise whether content which should be rendered by Mathjax is ready 
     */
    private ElementInnerTextPromise: Promise<boolean> = new Promise((resolve) => {});
    private ElementInnerTextPromiseResolve: any;

    MutationCallBack(mutations: MutationRecord[], observer: MutationObserver): void {
        mutations.forEach((mutation) => {
            var content = (<any>(mutation.target)).innerText;
            if (!(content === undefined || content == "undefined" || content == null)) {
                // console.log((<any>(mutation.target)).innerText);
                this.ElementInnerTextPromiseResolve(true);
            }
        });
    }

    /**
     * Gets the MathJax instance
     */
    public get MathJax() {
        return (<any>window).MathJax;
    }

    constructor(private elRef: ElementRef) {

        this.ElementInnerTextPromise = new Promise<boolean>(resolve => {
            this.ElementInnerTextPromiseResolve = resolve
        });

        // observe inner text of Element
        var observer = new MutationObserver(this.MutationCallBack.bind(this));
        var config = { attributes: false, childList: true, characterData: false, subtree: true };
        observer.observe(this.elRef.nativeElement, config);

        // wait until mathjax is ready
        this.MathjaxPromise = new Promise((resolve) => {
            this.MathjaxPromiseResolve = resolve;
            this.loadMathjaxScript(this.uri);
        });

        // await until the math content and mathjax is ready
        const promiseArray = [];
        promiseArray.push(this.ElementInnerTextPromise);
        promiseArray.push(this.MathjaxPromise);

        Promise.all(promiseArray).then((asdf) => {

            if (this.MathJax.startup.document == null && this.MathJax.startup.defaultReady !== undefined) {
                //renders complete page
                this.MathJax.startup.defaultReady();
            }
            else {
                // const node = document.getElementById('has-math');
                // (<any>window).MathJax.typesetClear([node]);
                // node.innerHTML = el.nativeElement;
                // (<any>window).MathJax.typesetPromise([node]).then(() => {
                //   // the new content is has been typeset
                // });

                if (this.MathJax.typesetClear !== undefined) {
                    if (this.MathJax.startup.document != null) {
                        this.MathJax.startup.document.state(0);
                    }
                    this.MathJax.texReset();
                    this.MathJax.typeset();
                }

            }
        });
    }
    private readonly uri: string = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    /**
     * Loads the javascript from the given uri
     * @param uri 
     * @param resolve 
     * @returns true if the javascript is already included, false if the javascript file was not included
     */
    public loadMathjaxScript(uri: string): boolean {
        let isFound = false;
        let scripts = document.getElementsByTagName("script")
        //check if mathjax script is included
        for (var i = 0; i < scripts.length; ++i) {
            if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src') == uri) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            //set mathjax config
            this.SetMathJaxConfig();
            //add script tag
            var dynamicScripts = [uri];
            for (var i = 0; i < dynamicScripts.length; i++) {
                let node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = true;
                // node.onload = (this.OnScriptLoaded.bind(this));
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        else {
            //script already loaded
            this.MathjaxPromiseResolve(true);
        }
        return isFound;
    }
    /**
     * the initial MathJax configure
     */
    private SetMathJaxConfig() {
        //define config of MathJax
        //https://docs.mathjax.org/en/v2.7-latest/options/hub.html
        (<any>window).MathJax = {
            //http://docs.mathjax.org/en/latest/options/startup/startup.html
            startup: {
                //Performing Actions After Typesetting
                ready: this.OnMathJaxReady.bind(this)
            },
            //disable instant rendering
            skipStartupTypeset: true
        };
    }

    private OnScriptLoaded(globaleventHandlers: GlobalEventHandlers, ev: Event): void {
        // this.MathJax = (<any>window).MathJax;
    }
    private OnMathJaxReady(): void {
        this.MathjaxPromiseResolve(true);

        // this.MathJax.startup.defaultReady();
        // this.MathJax.startup.promise.then(() => {
        //     console.log('MathJax initial typesetting complete');
        // });
    }
}