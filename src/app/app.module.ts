import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AuthGuard} from './guards/index';
import {UserService, EmployeeService, AuthenticateService} from './services/index';
import { EmployeeComponent } from './employee/employee.component';





const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'view-employees',      component: DashboardComponent, canActivate: [AuthGuard] },
  /*{
    path: 'heroes', component: HeroListComponent,
    data: { title: 'Heroes List' }
  },   //{ path: '**', component: PageNotFoundComponent }*/
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthGuard, AuthenticateService,
    EmployeeService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
