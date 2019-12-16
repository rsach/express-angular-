import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonManagementComponent } from './components/common-management/common-management.component';
import { AssignEmployeesComponent } from './components/assign-employees/assign-employees.component';
import { AddOrEditEmployeeComponent } from './components/add-or-edit-employee/add-or-edit-employee.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {FilterPipe} from '../shared/pipes/filter.pipe';
import {SharedModule} from '../shared/shared.module';

const routes = [
  {path: 'employeeManagement', component: CommonManagementComponent, data: {type: 'employee'}},
  {path: 'feedbackManagement', component: CommonManagementComponent, data: {type: 'feedback'}},
  {path: 'assignEmployees', component: AssignEmployeesComponent, data: {type: 'feedback'}},
];

@NgModule({
  declarations: [
    CommonManagementComponent,
    AssignEmployeesComponent,
    AddOrEditEmployeeComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),

  ],
  entryComponents: [
    AddOrEditEmployeeComponent
  ]
})
export class AdminModule { }
