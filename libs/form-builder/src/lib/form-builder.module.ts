import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CONTAINERS } from './containers';
import { WIDGETS } from './defaultwidgets';
import { DIRECTIVES } from './directives';
import { SERVICES } from './services';
import { WidgetRegistry } from './models';
import { DefaultWidgetRegistryService } from './defaultwidgets';

@NgModule({
  declarations: [
    ...CONTAINERS,
    ...WIDGETS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...CONTAINERS],
  entryComponents: [...WIDGETS],
  providers: [
    ...SERVICES,
    {
      provide: WidgetRegistry,
      useClass: DefaultWidgetRegistryService
    }
  ]
})
export class FormBuilderModule {
}
