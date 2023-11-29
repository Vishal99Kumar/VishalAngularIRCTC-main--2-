import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  private data = {};

  setOption(option, value) {
    this.data[option] = value;
  }

  getOption() {
    return this.data;
  }
  constructor() {}
  private sharedVariableSubject = new BehaviorSubject<any>(null);
  sharedVariable$ = this.sharedVariableSubject.asObservable();

  updateSharedVariable(newValue: any) {
    this.sharedVariableSubject.next(newValue);
    console.log('vishal', newValue);
  }
}
