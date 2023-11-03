import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OuterPagePage } from './outer-page.page';

describe('OuterPagePage', () => {
  let component: OuterPagePage;
  let fixture: ComponentFixture<OuterPagePage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(OuterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
