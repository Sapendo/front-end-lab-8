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
    const index = bd.indexOf(subject[id]);
    bd[index] = subject;
    localStorage.setItem('bd', JSON.stringify(bd));
  }
  deleteSubject(id): void {
    const bd = JSON.parse(localStorage.getItem('bd'));
    const index = bd.indexOf(id);
    bd.splice(index, 1);
    localStorage.setItem('bd', JSON.stringify(bd));
  }
  constructor() { }

}
