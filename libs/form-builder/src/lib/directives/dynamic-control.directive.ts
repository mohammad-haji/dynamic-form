import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  OnChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control, ControlConfig } from '../models';
import { WidgetFactoryService } from '../services/widget-factory.service';

@Directive({
  selector: '[dynamicControl]'
})
export class DynamicControlDirective implements OnInit, OnChanges {
  @Input()
  public config: ControlConfig;

  @Input()
  public group: FormGroup;

  @Input()
  public errors: Object = {};

  @Input()
  public disabled = false;

  private component: ComponentRef<Control>;

  public constructor(
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private widgetFactoryService: WidgetFactoryService
  ) {
  }

  public ngOnChanges() {
    this.setAsyncAttr();
  }

  public ngOnInit() {
    this.component = this.widgetFactoryService.createWidget(this.viewContainerRef, this.config.type);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.disabled = this.disabled;
    this.component.instance.errors = this.errors;
    this.setAsyncAttr();
  }

  public setAsyncAttr() {
    this.component ? this.component.instance.errors = this.errors : null;
  }
}
