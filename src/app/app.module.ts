import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { SalesComponent } from './components/sales/sales.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ActivityComponent } from './components/activity/activity.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    MainNavComponent,
    SalesComponent,
    TasksComponent,
    MessagesComponent,
    ActivityComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
