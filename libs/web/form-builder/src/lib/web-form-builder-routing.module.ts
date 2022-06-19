import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebFormBuilderComponent } from './web-form-builder.component';

const routes: Routes = [
  {
    path: '',
    component: WebFormBuilderComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebFormBuilderRoutingModule {
}
