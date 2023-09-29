import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBackgroundComponent } from './profile-background.component';

describe('ProfileBackgroundComponent', () => {
  let component: ProfileBackgroundComponent;
  let fixture: ComponentFixture<ProfileBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileBackgroundComponent]
    });
    fixture = TestBed.createComponent(ProfileBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
