import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ScrollingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    MatDialogModule,
    ScrollingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ]
})
export class SharedModule { }
