import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InnerPagePage } from './inner-page.page';

describe('InnerPagePage', () => {
  let component: InnerPagePage;
  let fixture: ComponentFixture<InnerPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InnerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
