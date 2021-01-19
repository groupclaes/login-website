import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { AuthGuard } from './core/auth/auth.guard';
import { AccountProfileComponent } from './pages/account/profile/profile.component';
import { AccountSettingsComponent } from './pages/account/settings/settings.component';
import { AccountAppsComponent } from './pages/account/apps/apps.component';


const routes: Routes = [
  // change to home when content is given
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'account/apps', component: AccountAppsComponent, canActivate: [AuthGuard] },
  { path: 'account/settings', component: AccountSettingsComponent, canActivate: [AuthGuard] },
  { path: 'account/profile', component: AccountProfileComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
