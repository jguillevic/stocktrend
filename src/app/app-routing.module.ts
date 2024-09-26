import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// TODO : path sous forme de constantes + dispatchées plus proche des composants.
const routes: Routes = [
  {
    path: 'regression',
    loadComponent: () => import('./analysis/pages/regression/regression.page').then( m => m.RegressionPage),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'regression'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
