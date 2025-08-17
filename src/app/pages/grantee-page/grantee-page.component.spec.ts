import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranteePageComponent } from './grantee-page.component';

describe('GranteePageComponent', () => {
  let component: GranteePageComponent;
  let fixture: ComponentFixture<GranteePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranteePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GranteePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
