import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardstatComponent } from 'src/app/modules/dashboardstat/dashboardstat.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { DocumentationComponent } from 'src/app/modules/documentation/documentation.component';
import { ViewportComponent } from 'src/app/modules/viewport/viewport.component';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    DashboardstatComponent,
    SidebarComponent,
    DocumentationComponent,
    ViewportComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  exports:[
    SidebarComponent
  ]
})
export class DefaultModule { }
