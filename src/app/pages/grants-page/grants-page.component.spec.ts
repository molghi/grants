import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsPageComponent } from './grants-page.component';

describe('GrantsPageComponent', () => {
  let component: GrantsPageComponent;
  let fixture: ComponentFixture<GrantsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
