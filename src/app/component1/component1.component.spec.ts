import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1Component } from './component1.component';
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";

describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component1Component ],
      imports: [ FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'the increment button increments the counter plus one', () => {
    const counterBefore = 123;
    component.count = counterBefore;
    fixture.detectChanges();

    // NIET GOED: let button = fixture.nativeElement.querySelector('#incr-but');
    let button = fixture.debugElement.query( By.css( '.incr-but-class'));
    button.triggerEventHandler( 'click', () => {
      console.log( 'Button pushed');
    });
    fixture.detectChanges();

    // Method 1: via debugElement:
    let countTextDebugElement = fixture.debugElement.query( By.css( ".counter-class"));
    expect(countTextDebugElement.nativeElement.textContent).toEqual( "" + (counterBefore + 1));

    // Method 2: via nativeElement
    let countTextNativeElement = fixture.nativeElement.querySelector( ".counter-class");
    expect(countTextNativeElement.textContent).toEqual( "" + (counterBefore + 1));

  });
});
