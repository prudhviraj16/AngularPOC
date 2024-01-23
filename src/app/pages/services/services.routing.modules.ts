import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { CanActivate } from 'src/app/services/auth/auth.guard';

const routes: Routes = [{
  path: '',
  canActivate: [CanActivate],
  component: ServicesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
