import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeListComponent } from './components/employe-list/employe-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  // { path: '', redirectTo: '/department-list', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  // { path: 'department-list', component: DepartmentListComponent },
  { path: 'departments/:id', component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ]
   },
  //{ path: 'department-list/:id', component: DepartmentDetailComponent },
  { path: 'employees', component: EmployeListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent,
  EmployeListComponent,
  DepartmentDetailComponent,
  DepartmentContactComponent,
  DepartmentOverviewComponent,
  PageNotFoundComponent,
];
