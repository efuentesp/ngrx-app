import { Component, OnInit, Input } from "@angular/core";

import { NgrxInputDirective } from "./ngrx-input.directive";

@Component({
  selector: "ngrx-input",
  templateUrl: "./ngrx-input.component.html",
  styleUrls: ["./ngrx-input.component.css"]
})
export class NgrxInputComponent implements OnInit {
  @Input() name: string;
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() required: boolean = true;
  @Input() help: string = "";
  @Input() error: string = "";

  constructor() {}

  ngOnInit() {}
}
