import { Component } from '@angular/core';
import { ChatbotService } from '../message-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent {
  question: string = '';
  response: string = '';

  constructor(private chatbotService: ChatbotService) { }

  askQuestion() {
    this.chatbotService.sendQuestion(this.question).subscribe((data: any) => {
      this.response = data.response;
      // Navigate to a new page where the response will be displayed
      // You can use Angular Router for navigation here
    });
  }
}