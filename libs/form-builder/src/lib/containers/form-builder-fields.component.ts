import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-builder',
  template: `
      <div class="dynamic-form" [formGroup]="form">
          <ng-container *ngFor="let field of getModelKeys()">
              <ng-container
                      dynamicControl
                      [group]="form"
                      [config]="formModel[field]"
                      [errors]="errors"
                      [disabled]="disabled">
              </ng-container>
          </ng-container>
      </div>
  `,
  styles: [
      `:host {
          display: block;
      }`
  ]
})
export class FormBuilderFieldsComponent implements OnInit {
  @Input()
  public form: FormGroup;

  @Input()
  public formModel: any;

  @Input()
  public errors: Object = {};

  @Input()
  public disabled = false;

  @Input()
  public debug = false;

  public constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
  }

  public getModelKeys() {
    return Object.keys(this.formModel ? this.formModel : {});
  }
}
