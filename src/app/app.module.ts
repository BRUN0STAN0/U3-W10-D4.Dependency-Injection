import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ContentAppComponent } from './content-app/content-app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './userlist/add-user/add-user.component';
import { TableUserComponent } from './userlist/table-user/table-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContentAppComponent,
    UserlistComponent,
    AddUserComponent,
    TableUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
