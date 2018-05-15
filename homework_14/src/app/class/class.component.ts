import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ISubject } from '../interface';

@Component({
  selector: '[app-class]',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  @Input() subject: ISubject;
  @Input() deleteSubject: void;
  @Output() onChange = new EventEmitter<ISubject>();
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
  onDelete() {

  }
  onSave() {
    this.edit = false;
    this.updateSubject = null;
    this.subject = {...this.updateSubject};
    this.onChange.emit(this.subject);
  }
  constructor() { }

  ngOnInit() {
  }

}
