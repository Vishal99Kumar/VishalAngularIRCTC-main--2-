import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-looking-for',
  templateUrl: './looking-for.component.html',
  styleUrls: ['./looking-for.component.scss']
})
export class LookingForComponent {
  constructor(private router: Router) {

  }
  googleRender() {
    console.log('going to render');
    this.router.navigateByUrl('https://www.google.com/')

  }
}
