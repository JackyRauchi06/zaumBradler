import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path : 'user', component : UserComponent},
  {path : 'admin', component : AdminComponent},
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
