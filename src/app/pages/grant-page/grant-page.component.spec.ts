import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantPageComponent } from './grant-page.component';

describe('GrantPageComponent', () => {
  let component: GrantPageComponent;
  let fixture: ComponentFixture<GrantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
