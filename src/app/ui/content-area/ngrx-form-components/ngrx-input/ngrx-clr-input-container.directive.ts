import { Input, Directive, Host, Optional } from "@angular/core";

import {
  ClrInputContainer,
  ClrTextareaContainer,
  ClrDateContainer,
  ClrCheckboxContainer,
  ClrRadioContainer,
  ClrSelectContainer,
  ClrPasswordContainer
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

    if (this.checkbox) {
      this.checkbox.invalid = errorsAreShown;
    }

    if (this.radio) {
      this.radio.invalid = errorsAreShown;
    }

    if (this.select) {
      this.select.invalid = errorsAreShown;
    }

    if (this.password) {
      this.password.invalid = errorsAreShown;
    }
  }

  constructor(
    @Host() @Optional() private input: ClrInputContainer,
    @Host() @Optional() private textarea: ClrTextareaContainer,
    @Host() @Optional() private date: ClrDateContainer,
    @Host() @Optional() private checkbox: ClrCheckboxContainer,
    @Host() @Optional() private radio: ClrRadioContainer,
    @Host() @Optional() private select: ClrSelectContainer,
    @Host() @Optional() private password: ClrPasswordContainer
  ) {}
}
