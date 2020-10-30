import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productCode'
})
export class ProductCodePipe implements PipeTransform {

  transform(value: number): string {
    return 'SKU: ' + value.toString();
  }

}
