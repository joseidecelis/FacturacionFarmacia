import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTestComponent } from './tabla-test.component';

describe('TablaTestComponent', () => {
  let component: TablaTestComponent;
  let fixture: ComponentFixture<TablaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
