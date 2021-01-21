import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './core/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { AccountMenuComponent } from './core/components/account-menu/account-menu.component';
import { AccountAppsComponent } from './pages/account/apps/apps.component';
import { AccountSettingsComponent } from './pages/account/settings/settings.component';
import { AccountProfileComponent } from './pages/account/profile/profile.component';
import { AccountApplicationListComponent } from './core/components/account-application-list/account-application-list.component';
import { AccountUpdatePasswordComponent } from './core/components/account-update-password/account-update-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    AccountMenuComponent,
    AccountAppsComponent,
    AccountSettingsComponent,
    AccountProfileComponent,
    AccountApplicationListComponent,
    AccountUpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
