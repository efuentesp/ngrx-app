import { Input, Directive, Host, Optional } from "@angular/core";

import { ClrInputContainer } from "@clr/angular";

import { FormControlState } from "ngrx-forms";

@Directive({
  selector: "[ngrxFormControlState]"
})
export class NgrxInputDirective {
  @Input() set ngrxFormControlState(state: FormControlState<any>) {
    console.log(state);
    const errorsAreShown =
      state.isInvalid && (state.isTouched || state.isSubmitted);

    if (this.input) {
      this.input.invalid = errorsAreShown;
    }
  }

  constructor(@Host() @Optional() private input: ClrInputContainer) {
    //console.log(input);
  }
}
