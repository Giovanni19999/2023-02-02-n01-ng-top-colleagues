import {Directive, Input} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective,
    multi: true
  }]

})
export class PseudoValidatorDirective implements AsyncValidator {

  @Input("tcPseudoValidator") pseudo = ""

  constructor(private http: HttpClient) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const colleagueSub = new Subject<ValidationErrors | null>;
    this.http.get("https://dev.cleverapps.io/api/v2/colleagues" + this.pseudo).subscribe(value => {
      colleagueSub.next({
        "pseudo": "pseudo exist"
      })
    }, error => {
      colleagueSub.next(null)
    })

    return colleagueSub.asObservable();
  }


}
