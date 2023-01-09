import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';

import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [
    ListEmployeeComponent,
    DetailEmployeeComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    HttpClientModule,
    SharedComponentsModule,
    RouterModule,
    PrimeNgModule,
  ],
  providers: [],
  exports: [CreateEmployeeComponent],
})
export class EmployeeModule {}
