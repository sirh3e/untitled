import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatoComponent } from './donato.component';

describe('DonatoComponent', () => {
  let component: DonatoComponent;
  let fixture: ComponentFixture<DonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
