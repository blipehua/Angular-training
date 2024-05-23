import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { EmployeDetailComponent } from './components/employe-detail/employe-detail.component';
import { EmployeeService } from './service/employee.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    EmployeDetailComponent,
    routingComponents,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
