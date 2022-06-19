import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'form-builder', pathMatch: 'full' },
  {
    path: 'form-builder',
    loadChildren: () =>
      import('@bugloos/web/form-builder').then(
        (m) => m.WebFormBuilderModule
      )
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
