import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { IccListComponent } from './icc-list/icc-list.component';
import { IccComponent } from './icc/icc.component';
import { ToolComponent } from './tool/tool.component';
import { ContactComponent } from './contact/contact.component';
import { UserlogComponent } from './userlog/userlog.component';
import { RequestComponent } from './request/request.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "icclist", component: IccListComponent},
  {path: "icc", component: IccComponent},
  {path: "tool", component: ToolComponent},
  {path: "contact", component: ContactComponent},
  {path: "userlog", component: UserlogComponent},
  {path: "request", component: RequestComponent},
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
