import { Injectable } from '@angular/core';
import { WidgetRegistry } from '../models';
import { InputControlWidgetComponent } from './input/input-control-widget.component';
import { TextareaControlWidgetComponent } from './textarea/textarea-control-widget.component';
import { SelectControlWidgetComponent } from './select/select-control-widget.component';

@Injectable()
export class DefaultWidgetRegistryService extends WidgetRegistry {
  constructor() {
    super();

    this.register('text', InputControlWidgetComponent);
    this.register('password', InputControlWidgetComponent);
    this.register('email', InputControlWidgetComponent);
    this.register('select', SelectControlWidgetComponent);
    this.register('textarea', TextareaControlWidgetComponent);
    this.register('number', InputControlWidgetComponent);
    this.register('date', InputControlWidgetComponent);
    this.register('month', InputControlWidgetComponent);
    this.register('week', InputControlWidgetComponent);
    this.register('time', InputControlWidgetComponent);

    this.setDefaultWidget(InputControlWidgetComponent);
  }
}
