import { TestBed, inject } from '@angular/core/testing';
import { StickHeaderDirective } from './stick-header.directive';
import { PLATFORM_ID } from '@angular/core';

describe('StickHeaderDirective', () => {
  let platformId: Object;
  let directive: StickHeaderDirective;
  let mockWindow: any;
  let mockDocument: any;

  beforeEach(() => {
    platformId = 'browser';
    mockWindow = {
      pageYOffset: 0,
      onscroll: null,
    };
    mockDocument = {
      getElementsByTagName: jasmine.createSpy('getElementsByTagName').and.callFake((tag) => {
        if (tag === 'nav') {
          return {
            item: () => ({ offsetHeight: 0, classList: { add: jasmine.createSpy(), remove: jasmine.createSpy() } }),
          };
        }
        if (tag === 'footer') {
          return {
            item: () => ({ appendChild: jasmine.createSpy(), removeChild: jasmine.createSpy(), getElementsByTagName: () => ({ length: 0 }) }),
          };
        }
      }),
      createElement: jasmine.createSpy('createElement').and.returnValue({ appendChild: jasmine.createSpy(), setAttribute: jasmine.createSpy() }),
      createTextNode: jasmine.createSpy('createTextNode'),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: PLATFORM_ID, useValue: platformId },
        { provide: Window, useValue: mockWindow },
        { provide: Document, useValue: mockDocument },
        StickHeaderDirective,
      ],
    });
  });

  beforeEach(inject([StickHeaderDirective], (s: StickHeaderDirective) => {
    directive = s;
  }));

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should add sticky class to nav element when pageYOffset is greater than nav element offsetHeight', () => {
    mockWindow.pageYOffset = 100;
    directive.stickyHeader();
    expect(mockDocument.getElementsByTagName('nav').item(0).classList.add).toHaveBeenCalledWith('sticky');
  });

  it('should remove sticky class from nav element when pageYOffset is less than nav element offsetHeight', () => {
    mockWindow.pageYOffset = 0;
    directive.stickyHeader();
    expect(mockDocument.getElementsByTagName('nav').item(0).classList.remove).toHaveBeenCalledWith('sticky');
  });
});