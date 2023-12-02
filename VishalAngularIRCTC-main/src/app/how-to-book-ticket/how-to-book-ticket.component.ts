import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from "@angular/material/expansion";

@Component({
  selector: 'app-how-to-book-ticket',
  templateUrl: './how-to-book-ticket.component.html',
  styleUrls: ['./how-to-book-ticket.component.scss']
})
export class HowToBookTicketComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
}
