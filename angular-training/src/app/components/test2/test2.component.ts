import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css'
})
export class Test2Component {
  public name= "Lucy";
  public surname = "Page";
  public info = {
    age: 24,
    height: 1.65,
    weight: 60
  }
  
  public date = new Date();
}
