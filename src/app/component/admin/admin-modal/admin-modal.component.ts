import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss']
})
export class AdminModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AdminModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
  }
  onNoClick(param): void {
    this.dialogRef.close(param);
  }
}
