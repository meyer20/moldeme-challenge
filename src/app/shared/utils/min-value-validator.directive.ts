import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minValueValidator(minValue: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return control.value > minValue ? null : { minValue: control.value };
  };
}
