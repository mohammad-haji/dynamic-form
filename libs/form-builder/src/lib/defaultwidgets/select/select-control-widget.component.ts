import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control, ControlConfig } from '../../models';

@Component({
  selector: 'input-control',
  template: `
      <div
              class="form-group"
              [formGroup]="group"

              [ngClass]="[config.mainWrapperClass || '']">

          <label
                  class="control-label"
                  [attr.for]="config.name"
                  [ngClass]="[config.labelClass || '']">
              {{ config.label }}
          </label>

          <div [ngClass]="[config.controlWrapperClass || '']">
              <select
                      class="form-control"
                      [attr.type]="config.type"
                      [attr.disabled]="disabled === true ? true : null"
                      [attr.id]="config.name"
                      [attr.placeholder]="config.placeholder"
                      [ngClass]="[config.controlClass || '']"
                      [attr.name]="config.name"
                      [formControlName]="config.name"
              >
                  <option
                          *ngFor="let option of config.options"
                          [ngValue]="option[0]"
                          [value]="option.id"
                  >
                      {{ option.text }}
                  </option>
              </select>
          </div>
      </div>
  `,
  styles: [`:host {
      display: block;
  }`]
})
export class SelectControlWidgetComponent implements Control, OnInit {
  public config: ControlConfig;
  public group: FormGroup;
  public errors: Object = {};
  public disabled = false;

  public constructor() {
  }

  public ngOnInit() {
  }
}
