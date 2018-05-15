import { TestBed, inject } from '@angular/core/testing';

import { AcademicSubjectService } from './academic-subject.service';

describe('AcademicSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcademicSubjectService]
    });
  });

  it('should be created', inject([AcademicSubjectService], (service: AcademicSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
