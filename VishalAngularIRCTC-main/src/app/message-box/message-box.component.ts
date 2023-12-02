import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
import { DataShareService } from '../data-share.service';


interface messageBody {
  id: number;
  text: string;
  origin: string;
}

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent implements OnInit {
renderOrderedList(arg0: string) {
throw new Error('Method not implemented.');
}
containsOrderedList(arg0: string): any {
throw new Error('Method not implemented.');
}
  message: string = '';
  messages: messageBody[] = [];
  responseOnServer: string = '';
  display: boolean = true;

  constructor(
    private msg: MessageServiceService,
    private dataService: DataShareService
  ) {
    this.dataService.sharedVariable$.subscribe((value) => {
      if (value) {
        this.display = value;
        this.messages = [];
      }
      console.log(this.display);
    });
  }
  ngOnInit() {
    //this.display = this.dataService.sharedVariable;
    // Use the value here
  }

  sendMessage() {

    if (this.message && this.message.trim() !== '') {
    this.messages.push({
      id: this.messages.length + 1,
      text: this.message,
      origin: 'me',
    });
    this.display = false;
    this.dataService.setOption('Display', this.display);
    this.msg.postData({ message: this.message }).subscribe((response) => {
      console.log('Response from backend:', response.answer.content);
      this.responseOnServer = response.answer.content;
      this.messages.push({
        id: this.messages.length + 1,
        text: this.responseOnServer,
        origin: 'Server',
      });
    });
    this.message = '';

    // console.log('Message:', this.message);
  }
  }
  onInputChange(event: any) {
    console.log(event.target.value);
  }
  ngOnChanges() {
    console.log(this.message);
  }
}








/*Test 
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
import { DataShareService } from '../data-share.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


interface messageBody {
  id: number;
  text: string;
  origin: string;
}

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent implements OnInit {
renderOrderedList(arg0: string) {
throw new Error('Method not implemented.');
}
containsOrderedList(arg0: string): any {
throw new Error('Method not implemented.');
}
  message: string = '';
  messages: messageBody[] = [];
  responseOnServer: string = '';
  display: boolean = true;

  // constructor(
  //   private msg: MessageServiceService,
  //   private dataService: DataShareService
  // ) {
  //   this.dataService.sharedVariable$.subscribe((value) => {
  //     if (value) {
  //       this.display = value;
  //       this.messages = [];
  //     }
  //     console.log(this.display);
  //   });

  constructor(private msg: MessageServiceService, private dataService: DataShareService, private sanitizer: DomSanitizer) {
    // ... existing constructor logic
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  containsOrderedList(text: string): boolean {
    // Implement the logic to check if the text contains an ordered list
    // For example, you can check if the text includes numeric points like '1.', '2.', etc.
    return /\d+\.\s/.test(text);
  }
 
  renderOrderedList(text: string): SafeHtml {
    // Split the response text into lines
    const lines = text.split('\n');
    // Map each line to a formatted ordered list item
    const formattedLines = lines.map(line => `<li>${line}</li>`);
 
    // Concatenate the lines into an ordered list
    const orderedList = `<ol>${formattedLines.join('')}</ol>`;
 
    // Sanitize and return the HTML to prevent potential security issues
    return this.sanitizer.bypassSecurityTrustHtml(orderedList);
  }
}

has context menu


  }
  ngOnInit() {
    //this.display = this.dataService.sharedVariable;
    // Use the value here
  }

  sendMessage() {

    if (this.message && this.message.trim() !== '') {
    this.messages.push({
      id: this.messages.length + 1,
      text: this.message,
      origin: 'me',
    });
    this.display = false;
    this.dataService.setOption('Display', this.display);
    this.msg.postData({ message: this.message }).subscribe((response) => {
      console.log('Response from backend:', response.answer.content);
      this.responseOnServer = response.answer.content;
      this.messages.push({
        id: this.messages.length + 1,
        text: this.responseOnServer,
        origin: 'Server',
      });
    });
    this.message = '';

    // console.log('Message:', this.message);
  }
  }
  onInputChange(event: any) {
    console.log(event.target.value);
  }
  ngOnChanges() {
    console.log(this.message);
  }
}*/