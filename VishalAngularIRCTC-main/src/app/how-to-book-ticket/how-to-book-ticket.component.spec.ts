import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBookTicketComponent } from './how-to-book-ticket.component';

describe('HowToBookTicketComponent', () => {
  let component: HowToBookTicketComponent;
  let fixture: ComponentFixture<HowToBookTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToBookTicketComponent]
    });
    fixture = TestBed.createComponent(HowToBookTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
