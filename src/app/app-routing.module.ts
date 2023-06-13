import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {ContactComponent} from "./user/contact/contact.component";
import {HomeComponent} from "./user/home/home.component";
import {LoginComponent} from "./user/login/login.component";

const routes: Routes = [
  {path : 'user', component : UserComponent},
  {path : 'admin', component : AdminComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : '', pathMatch : 'full', redirectTo : 'user'}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
