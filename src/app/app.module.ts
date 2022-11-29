import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { UsDataComponent } from './us-data/us-data.component';
import { PublicApiComponent } from './public-api/public-api.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TodoComponent } from './todo/todo.component';

const myRoute:Routes=[
  {
    path:"",
    component:ViewPassengerComponent

  },
  {
  path:"usdata",
  component:UsDataComponent
  },
  {
    path:"userinfo",
    component:UserInfoComponent
  },
  {
    path:"productlist",
    component:ProductListComponent
  },
  {
    path:"userdata",
    component:UserDataComponent
  },
  {
    path:"todo",
    component:TodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    UsDataComponent,
    PublicApiComponent,
    UserInfoComponent,
    ProductListComponent,
    UserDataComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
