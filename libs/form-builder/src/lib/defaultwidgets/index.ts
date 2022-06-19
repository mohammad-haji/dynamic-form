import { InputControlWidgetComponent } from './input/input-control-widget.component';
import { TextareaControlWidgetComponent } from './textarea/textarea-control-widget.component';
import { SelectControlWidgetComponent } from './select/select-control-widget.component';

export * from './default-widget-registry.service';

export const WIDGETS = [
  InputControlWidgetComponent,
  TextareaControlWidgetComponent,
  SelectControlWidgetComponent
];

