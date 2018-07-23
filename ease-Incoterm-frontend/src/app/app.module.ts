import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IccListComponent } from './icc-list/icc-list.component';
import { IccComponent } from './icc/icc.component';
import { ToolComponent } from './tool/tool.component';
import { ContactComponent } from './contact/contact.component';
import { UserlogComponent } from './userlog/userlog.component';
import { RequestComponent } from './request/request.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IccListComponent,
    IccComponent,
    ToolComponent,
    ContactComponent, 
    UserlogComponent,
    RequestComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
