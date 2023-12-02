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
  blurEffect: boolean = false;
  
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
    this.blurEffect = true;

    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.backdropClass = "blurClass",

        this.dialog.open(PopUpComponent, dialogConfig);
  }

}

