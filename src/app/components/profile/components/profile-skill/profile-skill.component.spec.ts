import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSkillComponent } from './profile-skill.component';

describe('ProfileSkillComponent', () => {
  let component: ProfileSkillComponent;
  let fixture: ComponentFixture<ProfileSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSkillComponent]
    });
    fixture = TestBed.createComponent(ProfileSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
