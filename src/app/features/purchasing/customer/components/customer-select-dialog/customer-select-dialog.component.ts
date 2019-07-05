import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-customer-select-dialog",
  templateUrl: "./customer-select-dialog.component.html",
  styleUrls: ["./customer-select-dialog.component.css"]
})
export class CustomerSelectDialogComponent implements OnInit {
  @Input() title: string = "";
  @Input() isDialogVisible: boolean = false;

  @Output() onClickSelect = new EventEmitter();
  @Output() onClickCancel = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log("CustomerSelectDialogComponent ngOnInit()");
  }

  _onClickSelect() {
    this.onClickSelect.emit();
  }

  _onClickCancel() {
    this.onClickCancel.emit();
  }
}
