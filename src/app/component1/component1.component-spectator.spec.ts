import { TestBed } from '@angular/core/testing';

import { Component1Component } from './component1.component';
import {FormsModule} from "@angular/forms";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {Spectator} from "@ngneat/spectator";
import {createComponentFactory} from "@ngneat/spectator/jest";

describe('Component1Component', () => {
  let spectator: Spectator<Component1Component>;
  let createComponent: any;

  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());
  });

  createComponent = createComponentFactory({
    component: Component1Component,
    imports: [FormsModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

});
