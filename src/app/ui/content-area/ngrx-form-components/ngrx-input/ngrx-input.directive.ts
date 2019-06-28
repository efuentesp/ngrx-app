import { Input, Directive, Host, Optional } from "@angular/core";

import { NgrxInputComponent } from "./ngrx-input.component";
import { FormControlState } from "ngrx-forms";

@Directive({
  selector: "ngrx-input[ngrxFormControlState]"
})
export class NgrxInputDirective {
  @Input() set ngrxFormControlState(state: FormControlState<any>) {}

  constructor(@Host() @Optional() private input: NgrxInputComponent) {}
}
