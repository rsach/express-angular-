import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../../../shared/services/review.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {AddOrEditEmployeeComponent} from '../../../admin/components/add-or-edit-employee/add-or-edit-employee.component';
import {SubmitFeedBackComponent} from '../submit-feed-back/submit-feed-back.component';

@Component({
  selector: 'app-list-feed-back',
  templateUrl: './list-feed-back.component.html',
  styleUrls: ['./list-feed-back.component.scss']
})
export class ListFeedBackComponent implements OnInit {

  reviews = [];
  subscriptions = [];
  constructor(
    private reviewService: ReviewService,
    private ar: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.ar.queryParams.pipe(
      switchMap(res => this.reviewService.getAll({review_from: res.id}))
    ).subscribe((res: any) => this.reviews = res.data.filter(data => !data.is_submitted));
  }

  writeFeedBack(employee) {
    const dialog = this.dialog.open(SubmitFeedBackComponent, {data: {employee}} );
    const a = dialog.afterClosed().subscribe(res => {


      if (res) {



        // if (res.type === 'update') {
        const index = this.reviews.map(data => data.id).indexOf(res.data.id);
        this.reviews.splice(index, 1);
        this.reviews = [...this.reviews];


      }
      // }
    });
    this.subscriptions.push(a);

  }

}
