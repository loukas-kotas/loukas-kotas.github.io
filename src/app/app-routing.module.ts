import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: false
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
