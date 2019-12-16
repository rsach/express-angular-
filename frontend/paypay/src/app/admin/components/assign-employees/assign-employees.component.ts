import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {ReviewService} from '../../../shared/services/review.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-assign-employees',
  templateUrl: './assign-employees.component.html',
  styleUrls: ['./assign-employees.component.scss']
})
export class AssignEmployeesComponent implements OnInit, OnDestroy {

  employees = [];
  subscriptions = [];
  constructor(
    private employeeService: EmployeeService,
    private reviewService: ReviewService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    const a  = this.employeeService.getAll()
      .subscribe((res: any) => this.employees = res.data);
    this.subscriptions.push(a);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(res => res.unsubscribe());
  }

  onAssign(reviewFrom, reviewOf) {
    const body = {
      review_of: reviewOf,
      review_from: reviewFrom
    };

    const a = this.reviewService.store(body)
      .subscribe((res: any) => (res));
    this.subscriptions.push(a);
  }

}
