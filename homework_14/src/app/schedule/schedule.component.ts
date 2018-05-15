import { Component, OnInit, Output } from '@angular/core';
import { ISubject } from '../interface';
import { AcademicSubjectService } from '../academic-subject.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  subjects: ISubject[] = [];

  add(): void {
    const newSubject = {
      id: new Date().valueOf(),
      topic: '',
      date: '',
      lecturer: ''
    };
    this.subjects.push(newSubject);
    this.academicSubjectService.postSubject(newSubject);
  }
  updateSubject(subject): void {
    const index = this.subjects.indexOf(subject.id);
    this.subjects[index] = subject;
    this.academicSubjectService.putSubject(subject.id, subject);
  }

  deleteSubject(subject): void {
    const index = this.subjects.indexOf(subject.id);
    this.subjects.splice(index, 1);
    this.academicSubjectService.deleteSubject(subject.id);
  }
  constructor( private academicSubjectService: AcademicSubjectService) { }

  ngOnInit() {
    console.log(this.subjects);
    
    this.subjects = this.academicSubjectService.getSubjects();

    console.log(this.subjects);
    // localStorage.clear();
  }

}
