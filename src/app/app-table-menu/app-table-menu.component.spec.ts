import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableMenuComponent } from './app-table-menu.component';

describe('AppTableMenuComponent', () => {
  let component: AppTableMenuComponent;
  let fixture: ComponentFixture<AppTableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTableMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
