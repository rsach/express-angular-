import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {ReviewService} from '../../../shared/services/review.service';

@Component({
  selector: 'app-add-or-edit-employee',
  templateUrl: './add-or-edit-employee.component.html',
  styleUrls: ['./add-or-edit-employee.component.scss']
})
export class AddOrEditEmployeeComponent implements OnInit, OnDestroy {

  body: any = {
    name: null
  };



  employees = [];
  subscriptions = [];
  constructor(
    private employeeService: EmployeeService,
    private reviewService: ReviewService,
    public dialogRef: MatDialogRef<AddOrEditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (this.data.type === 'feedback') {
      this.body = {
        review_of: null,
        review: null,
        is_submitted: true
      };

    }
    if (this.data.body) {
      this.body = {...this.data.body};
    }


  }

  onSubmit() {
    if (this.data.type === 'employee') {

      if (!this.body.name || !this.body.name.trim()) {
        return;
      }
    }

    if (this.data.type === 'feedback') {
      if (!this.body.review  || !this.body.review.trim() || !this.body.review_of) {
        return;
      }
    }


    if (this.data.type === 'feedback') {

      if (this.data.body) {
        const ab = this.reviewService.update(this.data.body.id, this.body).subscribe((res: any) => {
          console.log(res);
          this.dialogRef.close({data: res.data, type: 'update'});
        });
        this.subscriptions.push(ab);

        return;
      }


      const abc = this.reviewService.store(this.body).subscribe((res: any) => {
        console.log(res);
        this.dialogRef.close({data: res.data, type: 'save'});
      });
      this.subscriptions.push(abc);

      return;
    }

    if (this.data.body) {
      const ab = this.employeeService.update(this.data.body.id, this.body).subscribe((res: any) => {
        console.log(res);
        this.dialogRef.close({data: res.data, type: 'update'});
      });
      this.subscriptions.push(ab);

      return;
    }


    const a = this.employeeService.store(this.body).subscribe((res: any) => {
      console.log(res);
      this.dialogRef.close({data: res.data, type: 'save'});
    });
    this.subscriptions.push(a);
  }

  ngOnDestroy(): void {

    this.subscriptions.forEach(res => res.unsubscribe());
  }

  onCancel() {
    this.dialogRef.close(null);

  }


}
