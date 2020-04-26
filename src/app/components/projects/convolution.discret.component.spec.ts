import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvolutionDiscretComponent } from './convolution.discret.component';

describe('ConvolutionDiscretComponent', () => {
  let component: ConvolutionDiscretComponent;
  let fixture: ComponentFixture<ConvolutionDiscretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvolutionDiscretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvolutionDiscretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
