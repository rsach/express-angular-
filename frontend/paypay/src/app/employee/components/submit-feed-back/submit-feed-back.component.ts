import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ReviewService} from '../../../shared/services/review.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-submit-feed-back',
  templateUrl: './submit-feed-back.component.html',
  styleUrls: ['./submit-feed-back.component.scss']
})
export class SubmitFeedBackComponent implements OnInit, OnDestroy {

  body = {
    review: null,
    is_submitted: true
  };
  subscriptions = [];
  constructor(
    private reviewService: ReviewService,
    private dialogRef: MatDialogRef<SubmitFeedBackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit() {
  }

  onSubmit() {


      if (!this.body.review  || !this.body.review.trim() ) {
        return;
      }







      const abc = this.reviewService.update(this.data.employee.id, this.body).subscribe((res: any) => {
        console.log(res);
        this.dialogRef.close({data: res.data, type: 'save'});
      });
      this.subscriptions.push(abc);

      return;


  }

  ngOnDestroy(): void {

    this.subscriptions.forEach(res => res.unsubscribe());
  }

  onCancel() {
    this.dialogRef.close(null);

  }


}
