import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTemperatureColor]'
})
export class TemperatureColorDirective {

  @Input() temperature: number = 0;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = this.generateColor(this.temperature);
  }

  public generateColor(temp: number): string {
    if (temp <= 0) return "#2478ff";
    if (temp <= 5) return "#66a1ff";
    if (temp <= 10) return "#90bafc";
    if (temp <= 15) return "#c5dafa";
    if (temp <= 20) return "#fae7c5";
    if (temp <= 25) return "#f5c471";
    if (temp <= 30) return "#f5ab2c";
    if (temp <= 35) return "#f5832c";
    return "#d43c19";
  }

}
