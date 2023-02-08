import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective,
    multi: true
  }]
})
export class FirstLastValidatorDirective implements Validator {

  @Input("tcFirstLastValidator") namePre: string = ""

  validate(control: AbstractControl): ValidationErrors | null {
    const namePreTab = this.namePre.split(",")
    console.log(namePreTab)
    if (namePreTab.length < 2) {
      return {firstLast: 'first name must be different from lastname'};
    }
    if (namePreTab[0] === namePreTab[1]) {
      return {firstLast: 'first name must be different from lastname'};

    }
    return null


  }

}
