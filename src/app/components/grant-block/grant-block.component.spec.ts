import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantBlockComponent } from './grant-block.component';

describe('GrantBlockComponent', () => {
  let component: GrantBlockComponent;
  let fixture: ComponentFixture<GrantBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
