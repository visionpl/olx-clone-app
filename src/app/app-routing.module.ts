import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'account', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
