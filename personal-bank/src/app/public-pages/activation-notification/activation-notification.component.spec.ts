import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationNotificationComponent } from './activation-notification.component';

describe('ActivationNotificationComponent', () => {
  let component: ActivationNotificationComponent;
  let fixture: ComponentFixture<ActivationNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
