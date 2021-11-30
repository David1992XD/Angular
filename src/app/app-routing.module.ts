import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'notFound', loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'jobs', loadChildren: () => import('./components/jobs/jobs.module').then(m => m.JobsModule) },
  { path: '**', redirectTo: 'noFound'},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
