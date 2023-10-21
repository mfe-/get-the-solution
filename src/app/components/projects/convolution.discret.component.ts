import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-convolution',
  templateUrl: './convolution.discret.component.html'
})
export class ConvolutionDiscretComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute) {
    this._x = [1, 2, 2, 1, 0, 0];
    this._h = [1, -1, 0, 0, -1, 1];
    this._only_overlap = false;
  }

  ngOnInit(): void {
    let x = this.route.snapshot.paramMap.get('x');
    let h = this.route.snapshot.paramMap.get('h');

    this.myH = h || '';
    this.myX = x || '';

    this.calculateConv1();
  }
  public calculateConv1(): void {
    this.conv = this.conv1(this._x, this._h, this._only_overlap);
  }
  public _x: number[];
  public _h: number[];
  public conv: number[]= Array();
  public steps: string[] = Array();

  conv1(x: number[], h: number[], only_overlap: boolean): number[] {
    var y: number[] = new Array();
    this.steps = new Array();
    // https://dsp.stackexchange.com/questions/34434/vector-length-output-of-discrete-time-convolution?newreg=02494406a8bd4861a8f4f744be8d2a81
    var N = h.length;
    var M = x.length;

    var y_lenght = N + M - 1;
    if (only_overlap == false) {
      //full mode
      //This returns the convolution at each point of overlap, with an output shape of (N+M-1,).
      //At the end-points of the convolution, the signals do not overlap completely, and boundary effects may be seen.
      y_lenght = N + M - 1;
    }
    else {
      // Mode ‘valid’ returns output of length max(M, N) - min(M, N) + 1. 
      // The convolution product is only given for points where the signals overlap completely. Values outside the signal boundary have no effect.
      y_lenght = Math.max(M, N) - Math.min(M, N) + 1.
    }

    var min_v = (N < M) ? h : x;
    var max_v = (N < M) ? x : h;

    for (var i = 0; i < y_lenght; i++) {

      var n: number = 0;
      var m: number = 0;
      y[i] = 0;
      if (only_overlap == false) {
        this.steps[i] = "y[" + i + "]=";

        //calculate sum(x[m]*h[n-m])
        for (m = 0, n = i; m <= i; m++) {
          this.steps[i] = this.steps[i] + ("x[" + m + "]*h[" + (n - m) + "](" + (this.getX(m) * this.getH(n - m)) + ") + ");
          y[i] = y[i] + (this.getX(m) * this.getH(n - m));
        }
        this.steps[i] = this.steps[i].substring(0, this.steps[i].length - 2) + "=" + y[i];
      }
      else {
        //Mode "valid"
        var j = 0;
        var k = i;
        for (j = (min_v.length - 1), k = i; j >= 0; --j) {
          y[i] += min_v[j] * max_v[k];
          ++k;
        }
      }
    }
    //tell angular to rerender our steps loop
    this.cdr.detectChanges();
    return y;
  }
  public _only_overlap: boolean;
  get only_overlap(): boolean {
    return this._only_overlap;
  }
  set only_overlap(value: boolean) {
    this._only_overlap = value;
    this.calculateConv1();
  }

  getX(m: number): number {
    return m <= this._x.length - 1 ? this._x[m] : 0;
  }
  getH(nM: number) {
    return nM <= this._h.length - 1 ? this._h[nM] : 0;
  }

  identify(index: any, item: any) {
    return index;
  }

  private _myX: string = "";
  get myX(): string {
    this._myX = this.arrayToString(this._x);
    return this._myX;
  }
  set myX(value: string) {
    var array: number[];
    try {
      array = this.stringToArray(value);
      this._x = array;
      this.calculateConv1();
    }
    catch (e) { }
  }
  private _myH: string = "";
  get myH(): string {
    this._myH = this.arrayToString(this._h);
    return this._myH;
  }
  set myH(value: string) {
    var array: number[];
    try {
      array = this.stringToArray(value);
      this._h = array;
      this.calculateConv1();
    }
    catch (e) { }
  }

  arrayToString(array: number[]): string {
    var string: string = "";
    var i = 0;
    for (i = 0; i < array.length; i++) {
      string = string + array[i];
      if (i != array.length - 1) {
        string = string + ",";
      }
    }
    return string;
  }
  stringToArray(string: string): number[] {
    var array: number[] = new Array();
    var splitted = string.split(",");
    var i = 0;
    for (i = 0; i < splitted.length; i++) {
      var number = parseInt(splitted[i], 10);
      if (isNaN(number)) {
        number = 0;
      }
      array.push(number);
    }
    return array;
  }

}
