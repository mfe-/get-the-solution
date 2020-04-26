import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-convolution',
  templateUrl: './convolution.discret.component.html'
})
export class ConvolutionDiscretComponent implements OnInit {

  constructor() {
    this._x = [1, 2, 2, 1, 0, 0];
    this._h = [1, -1, 0, 0, -1, 1];
  }

  ngOnInit(): void {
    this.conv = this.conv1(this._x, this._h, false);
  }
  public _x: number[];
  public _h: number[];
  public conv: number[];
  public steps: string[] = Array();

  conv1(x: number[], h: number[], only_overlap: boolean): number[] {
    var y: number[] = new Array();

    // https://dsp.stackexchange.com/questions/34434/vector-length-output-of-discrete-time-convolution?newreg=02494406a8bd4861a8f4f744be8d2a81
    var N = h.length;
    var M = x.length;
    //full mode
    //This returns the convolution at each point of overlap, with an output shape of (N+M-1,).
    //At the end-points of the convolution, the signals do not overlap completely, and boundary effects may be seen.
    var y_lenght = N + M - 1;

    for (var i = 0; i < y_lenght; i++) {

      var n: number = 0;
      var m: number = 0;
      y[i] = 0;
      this.steps[i] = "y[" + i + "]=";

      //calculate sum(x[m]*h[n-m])
      for (m = 0, n = i; m <= i; m++) {
        this.steps[i] = this.steps[i] + ("x[" + m + "]*h[" + (n - m) + "](" + (this.getX(m) * this.getH(n - m)) + ") + ");
        y[i] = y[i] + (this.getX(m) * this.getH(n - m));
      }
      this.steps[i] = this.steps[i].substring(0, this.steps[i].length - 2) + "=" + y[i];
      console.log(this.steps[i]);
    }
    return y;
  }
  getX(m: number): number {
    return m <= this._x.length - 1 ? this._x[m] : 0;
  }
  getH(nM: number) {
    return nM <= this._h.length - 1 ? this._h[nM] : 0;
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
      this.conv = this.conv1(this._x, this._h, false)
    }
    catch
    {

    }
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
      this.conv = this.conv1(this._x, this._h, false)
    }
    catch
    {

    }
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
