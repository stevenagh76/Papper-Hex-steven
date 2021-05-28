
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { HomePageComponent } from './home-page/home-page.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { DefaultComponent } from './layouts/default/default.component';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardstatComponent } from './modules/dashboardstat/dashboardstat.component';
import { DocumentationComponent } from './modules/documentation/documentation.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ViewportComponent} from './modules/viewport/viewport.component'





const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'join-now',component:JoinNowComponent},

  
  {
    path: 'default',
    component: DefaultComponent,
    children: [{
      path: 'dash',
      component: DashboardComponent
    },
    {
      path:'dashstat',
      component: DashboardstatComponent
    },
    {
      path:'documents',
      component: DocumentationComponent
    },
    {
      path:'View',
      component: ViewportComponent
    },
    {
      path: 'posts',
      component: PostsComponent
    }]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
