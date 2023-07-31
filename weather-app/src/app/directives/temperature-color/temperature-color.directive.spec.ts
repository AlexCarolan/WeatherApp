import { ElementRef } from '@angular/core';
import { TemperatureColorDirective } from './temperature-color.directive';


describe('TemperatureColorDirective', () => {
  let elRef: ElementRef;

  it('generateColor should return cold blue for minus temps', () => {
    const directive = new TemperatureColorDirective(elRef);
    expect(directive.generateColor(-1)).toEqual("#2478ff");
  });

  it('generateColor should return pale blue for low temps', () => {
    const directive = new TemperatureColorDirective(elRef);
    expect(directive.generateColor(2.5)).toEqual("#66a1ff");
  });

  it('generateColor should return pale yellow for mid temps', () => {
    const directive = new TemperatureColorDirective(elRef);
    expect(directive.generateColor(16.25)).toEqual("#fae7c5");
  });

  it('generateColor should return orange for high temps', () => {
    const directive = new TemperatureColorDirective(elRef);
    expect(directive.generateColor(27)).toEqual("#f5ab2c");
  });

  it('generateColor should return red for very high temps', () => {
    const directive = new TemperatureColorDirective(elRef);
    expect(directive.generateColor(37)).toEqual("#d43c19");
  });
});
