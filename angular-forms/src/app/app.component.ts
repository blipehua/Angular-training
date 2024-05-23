import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-forms';
  topics: string[] = ['Angular', 'React', 'Vue', 'NextJS'];
  public userModel: User = new User('Rob', 'Stewart', 'robst@gmail.com', 997212321, '', '', true);
}
