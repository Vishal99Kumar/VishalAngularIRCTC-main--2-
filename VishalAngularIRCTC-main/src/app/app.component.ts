import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'irctc-task-design';
  isOpen: boolean = false;
  name: string = 'test';
  color: string = 'test';
  
  constructor(public dialog: MatDialog) {}
  openChatBox() {
    this.isOpen = !this.isOpen
  }

  showComponents: boolean = true;
  showChat: boolean = false;

  toggleComponents() {
    this.showComponents = !this.showComponents;
    this.showChat = !this.showChat;
  }

  openDialog(): void {
    // const dialogRef = this.dialog.open(PopUpComponent, {
    //   width: '400px',
    //   data: { name: this.name, color: this.color },
    // });
    // dialogRef.afterClosed().subscribe((res) => {
    //   this.color = res;
    // });

    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(PopUpComponent, dialogConfig);
  }

}

