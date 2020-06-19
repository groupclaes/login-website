import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { AuthGuard } from './core/auth/auth.guard';


const routes: Routes = [
  // change to home when content is given
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
