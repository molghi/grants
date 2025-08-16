import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsBlockComponent } from './grants-block.component';

describe('GrantsBlockComponent', () => {
  let component: GrantsBlockComponent;
  let fixture: ComponentFixture<GrantsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantsBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
