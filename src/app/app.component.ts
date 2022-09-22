import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  observable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(Math.random()); //valeur différente si plusieurs observers
  });

  constructor() {
    //observer l'observable
    this.observable.subscribe((data) => {
      console.log(data);
    });
    this.observable.subscribe((data) => {
      console.log(data, '2e observer');
    });
  }
}
