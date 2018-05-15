import { Injectable } from '@angular/core';
import { ISubject } from './interface';

@Injectable()
export class AcademicSubjectService {
  getSubjects(): ISubject[] {
    const bd = localStorage.getItem('bd');
    if (bd) {
      return JSON.parse(bd);
    } else {
      return [];
    }
  }
  postSubject(subject): void {
    const bd = JSON.parse(localStorage.getItem('bd'));
    if (bd) {
      bd.push(subject);
      localStorage.setItem('bd', JSON.stringify(bd));
    } else {
      localStorage.setItem('bd', JSON.stringify([subject]));
    }
  }
  putSubject(id, subject): void {
    const bd = JSON.parse(localStorage.getItem('bd'));
    const index = bd.findIndex(el => el.id === subject.id);
    bd[subject.index] = subject.subjectInfo;
    localStorage.setItem('bd', JSON.stringify(bd));
  }
  deleteSubject(subject): void {
    const bd = JSON.parse(localStorage.getItem('bd'));
    bd.splice(subject.index, 1);
    localStorage.setItem('bd', JSON.stringify(bd));
  }
  constructor() { }

}
