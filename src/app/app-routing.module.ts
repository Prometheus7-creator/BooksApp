import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SearchComponent } from './search/search.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  {path:"", component:LandingPageComponent},
  {path:"search", component:SearchComponent},
  {path:"login", component:LoginPageComponent},
  {path:"signup", component:SignupPageComponent},
  {path: "result", component:ResultPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
