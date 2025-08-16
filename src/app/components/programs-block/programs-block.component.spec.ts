import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsBlockComponent } from './programs-block.component';

describe('ProgramsBlockComponent', () => {
  let component: ProgramsBlockComponent;
  let fixture: ComponentFixture<ProgramsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
