import { Input, Directive, Host, Optional } from "@angular/core";

import {
  ClrInputContainer,
  ClrTextareaContainer,
  ClrDateContainer
} from "@clr/angular";

import { FormControlState } from "ngrx-forms";

@Directive({
  selector: "[ngrxFormControlState]"
})
export class NgrxClrInputContainerDirective {
  @Input() set ngrxFormControlState(state: FormControlState<any>) {
    // console.log(state);
    const errorsAreShown =
      state.isInvalid && (state.isTouched || state.isSubmitted);

    if (this.input) {
      this.input.invalid = errorsAreShown;
    }

    if (this.textarea) {
      this.textarea.invalid = errorsAreShown;
    }

    if (this.date) {
      this.date.invalid = errorsAreShown;
    }
  }

  constructor(
    @Host() @Optional() private input: ClrInputContainer,
    @Host() @Optional() private textarea: ClrTextareaContainer,
    @Host() @Optional() private date: ClrDateContainer
  ) {}
}
