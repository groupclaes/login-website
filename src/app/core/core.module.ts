import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth/auth.service";

import { AccountApplicationListComponent } from "./components/account-application-list/account-application-list.component";
import { AccountMenuComponent } from "./components/account-menu/account-menu.component";
import { AccountUpdatePasswordComponent } from "./components/account-update-password/account-update-password.component";

@NgModule({
  declarations: [
    AccountApplicationListComponent,
    AccountMenuComponent,
    AccountUpdatePasswordComponent
  ],
  exports: [
    AccountApplicationListComponent,
    AccountMenuComponent,
    AccountUpdatePasswordComponent
  ],
  providers: [
    AuthService
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
