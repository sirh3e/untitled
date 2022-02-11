import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {DonatoComponent} from "./components/donato/donato.component";

const routes: Routes = [
  {path: 'user', children: [{
    path: 'donato', component: DonatoComponent
  }], component: UserComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
