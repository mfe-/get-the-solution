import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a polished intro about the website', () => {
    const text = fixture.nativeElement.textContent;

    expect(text).toContain('Hi, I\'m Martin');
    expect(text).toContain('software engineering');
    expect(text).toContain('articles and blog posts');
    expect(text).not.toContain('...the website');
  });
});
