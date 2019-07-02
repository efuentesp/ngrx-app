import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-form-alert",
  templateUrl: "./form-alert.component.html",
  styleUrls: ["./form-alert.component.css"]
})
export class NgrxFormAlertComponent implements OnInit {
  @Input() message: string = "";

  constructor() {}

  ngOnInit() {}
}
