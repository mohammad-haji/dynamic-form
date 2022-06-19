import { NgModule } from '@angular/core';
import { WebFormBuilderRoutingModule } from './web-form-builder-routing.module';
import { CommonModule } from '@angular/common';
import { WebFormBuilderComponent } from './web-form-builder.component';
import { FormBuilderModule } from '@bugloos/form-builder';
import { WebFormBuilderService } from './web-form-builder.service';

@NgModule({
  imports: [CommonModule, WebFormBuilderRoutingModule, FormBuilderModule],
  declarations: [WebFormBuilderComponent],
  providers: [WebFormBuilderService]
})
export class WebFormBuilderModule {
}
