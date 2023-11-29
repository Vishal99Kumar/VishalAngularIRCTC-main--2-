import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private apiUrl = 'http://127.0.0.1:5000'; // Update with your Flask server URL (For calling old backend)

  // private apiUrl = 'https://abcde1234.azurewebsites.net';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/data`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/predict`, data);
  }
}
export class ChatbotService {
  constructor(private http: HttpClient) { }

  sendQuestion(question: string) {
    const url = 'http://127.0.0.1:5000';
    return this.http.post(url, { question });
  }
}