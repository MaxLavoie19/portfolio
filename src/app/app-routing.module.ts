import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectLoaderService } from './project-loader.service';

const routes: Routes = [
  // { path: 'consumers', loadChildren: './consumers/consumers.module#ConsumersModule', canLoad: [AppAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProjectLoaderService,
  ]
})
export class AppRoutingModule { }
