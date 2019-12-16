import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFeedBackComponent } from './components/list-feed-back/list-feed-back.component';
import { SubmitFeedBackComponent } from './components/submit-feed-back/submit-feed-back.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';


const routes = [
  {path: '', component: ListFeedBackComponent}
];

@NgModule({
  declarations: [ListFeedBackComponent, SubmitFeedBackComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    SubmitFeedBackComponent
  ]
})
export class EmployeeModule { }
