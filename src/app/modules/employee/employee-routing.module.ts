import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from 'src/app/pages/pages.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';

import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'list-employee',
        component: ListEmployeeComponent,
      },
      {
        path: 'detail-employee/:id',
        component: DetailEmployeeComponent,
      },
      {
        path: '**',
        redirectTo: 'list-employee',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
