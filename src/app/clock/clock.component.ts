import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
user:User={
  name:'jayanth',
  mobile:9063301100,
  email:'jay123@gmail.com',
  age:25
}
}
