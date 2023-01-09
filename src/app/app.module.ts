import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesService } from 'src/app/shared/services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './modules/employee/employee.module';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { SharedComponentsModule } from './shared/shared-components.module';
import { PagesComponent } from './pages/pages.component';
import { DialogService } from 'primeng/dynamicdialog';
import { EmployeeService } from './modules/employee/service/employee.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, PagesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedComponentsModule,
    EmployeeModule,
    PrimeNgModule,
  ],
  providers: [
    EmployeeService,
    DialogService,
    MessageService,
    ConfirmationService,
    MessagesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
