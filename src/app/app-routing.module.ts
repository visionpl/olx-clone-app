import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'moje-konto', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
