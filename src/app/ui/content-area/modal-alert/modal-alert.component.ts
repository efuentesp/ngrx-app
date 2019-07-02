import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

enum AlertType {
  WARNING,
  ERROR,
  SUCCESS,
  INFO,
  QUESTION
}

@Component({
  selector: "app-modal-alert",
  templateUrl: "./modal-alert.component.html",
  styleUrls: ["./modal-alert.component.css"]
})
export class AlertComponent implements OnInit {
  @Input() title: string = "";
  @Input() message: string = "";
  @Input() type: AlertType = AlertType.SUCCESS;
  @Input() isAlertVisible: boolean = false;

  @Output() onClickOk = new EventEmitter();
  @Output() onClickCancel = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  _onClickOk() {
    this.onClickOk.emit();
  }

  _onClickCancel() {
    this.onClickCancel.emit();
  }
}
