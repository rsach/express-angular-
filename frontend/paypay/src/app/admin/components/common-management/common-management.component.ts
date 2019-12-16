import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {ReviewService} from '../../../shared/services/review.service';
import {Observable} from 'rxjs';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AddOrEditEmployeeComponent} from '../add-or-edit-employee/add-or-edit-employee.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-common-management',
  templateUrl: './common-management.component.html',
  styleUrls: ['./common-management.component.scss']
})
export class CommonManagementComponent implements OnInit, OnDestroy {

  employees = [];
  emp = [];
  subscriptions = [];
  type = 'employee';
  constructor(
    private employeeService: EmployeeService,
    private reviewService: ReviewService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.type = this.ar.snapshot.data.type;


    const a  = this.employeeService.getAll().subscribe((res: any) => {
      if (this.ar.snapshot.data.type === 'employee') {
        this.employees = res.data;

      }
      this.emp = res.data;
    });
    this.subscriptions.push(a);



    if (this.ar.snapshot.data.type === 'feedback') {

      const ab  = this.reviewService.getAll().subscribe((res: any) => this.employees = res.data);
      this.subscriptions.push(ab);

    }

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(res => res.unsubscribe());
  }


  onAddOrEdit(body = null) {
    const type = this.ar.snapshot.data.type;
    const dialog = this.dialog.open(AddOrEditEmployeeComponent, {data: {body, type, emp: this.emp} });
    const a = dialog.afterClosed().subscribe(res => {


      if (res) {
        if (type === 'employee') {


          if (res.type === 'save') {
            this.employees = [...this.employees, res.data];
            return;
          }
        }

        // if (res.type === 'update') {
        const index = this.employees.map(data => data.id).indexOf(res.data.id);
        let reviewOf = null;
        if (type === 'feedback') {
           reviewOf = this.employees[index].reviewOf;

        }
        this.employees[index]  = res.data;
        if (type === 'feedback') {
          this.employees[index].reviewOf = reviewOf;

        }
        this.employees = [...this.employees];
      }
      // }
    });
    this.subscriptions.push(a);
  }

  onDelete(employee) {
    const a = this.employeeService.delete(employee.id).subscribe((res: any) => {
      this.employees = this.employees.filter(data => data.id !== employee.id);
    } );
    this.subscriptions.push(a);
  }
}
