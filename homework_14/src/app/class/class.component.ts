import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ISubject } from '../interface';

@Component({
  selector: '[app-class]',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  @Input() subject: ISubject;
  @Output() Change = new EventEmitter();
  @Output() Delete = new EventEmitter();
  edit: boolean;
  updateSubject: ISubject;

  onMakeChange(): void {
    this.updateSubject = {...this.subject};
    this.edit = true;
  }
  onCancel() {
    this.edit = false;
    this.updateSubject = null;
  }
  onSave() {
    this.subject = {...this.updateSubject};
    this.edit = false;
    this.updateSubject = null;
    this.Change.emit(this.subject);
  }
  onDelete() {
    this.Delete.emit(this.subject);
  }
  constructor() { }

  ngOnInit() {
  }

}
