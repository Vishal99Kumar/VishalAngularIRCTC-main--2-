import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DataShareService } from '../data-share.service';

export interface ModalData {
  name: string;
  color: string;
}
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})

export class PopUpComponent implements OnInit {
  
  display:boolean = true;
  constructor(
    // public dialogRef: MatDialogRef<PopUpComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: ModalData
    private dialogRef: MatDialogRef<PopUpComponent>,
    private dataService: DataShareService,
  ) {}
  dialogeClose(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

  }
}
