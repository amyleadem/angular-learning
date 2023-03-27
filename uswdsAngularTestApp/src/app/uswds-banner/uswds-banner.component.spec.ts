import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UswdsBannerComponent } from './uswds-banner.component';

describe('UswdsBannerComponent', () => {
  let component: UswdsBannerComponent;
  let fixture: ComponentFixture<UswdsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UswdsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UswdsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
