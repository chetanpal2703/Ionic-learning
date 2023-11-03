import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestFormSendDataPage } from './test-form-send-data.page';

describe('TestFormSendDataPage', () => {
  let component: TestFormSendDataPage;
  let fixture: ComponentFixture<TestFormSendDataPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(TestFormSendDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
