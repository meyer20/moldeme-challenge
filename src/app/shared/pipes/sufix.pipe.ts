import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Pipe({
  name: 'sufix',
  pure: true
})
export class SufixPipe implements PipeTransform {

  transform(value, valueType) {
    if (valueType === 'price') {
      return new CurrencyPipe('pt', 'BRL').transform(value);
    } else if (valueType === 'area') {
      return new DecimalPipe('pt').transform(value) + 'm';
    } else if (valueType === 'shirts') {
      return Math.floor(Number(value));
    }

    return value;
  }

}
