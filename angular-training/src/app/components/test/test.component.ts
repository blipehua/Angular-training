import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template: `<div>
    <!--<h2>{{name.length}}</h2> 
    <h2>{{greetUser()}}</h2> 
    <h2>{{4+4}}</h2> </div>
    <input [id]="myId" type="text" value="InpuntText">
    <input disabled="false" id="{{myId}}" type="text" value="InputText2">
    <h2 [class.text-danger]="hasError">Code Evo</h2>
    <h2 [style.color]="'orange'">Style Bingding 1</h2>
    <h2 [style.color]="highligthColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyle">Style binding 3</h2>-->

    <!--
    <input #myInput type="text">
    <button (click)="onClick($event)">Click me</button> </div>
    <button (click)="logMessage(myInput)">Click me</button>
    {{greeting}}-->

    <!--
    <input [(ngModel)]="name" type="text" />
    {{name}}-->
    <h2 *ngIf="displayName; then thenBlock; else elseBlock">Code Evo</h2>
    <ng-template #thenBlock><h2>Visible</h2></ng-template>
    <ng-template #elseBlock><h2>Hidden</h2></ng-template>

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">U picked red</div>
      <div *ngSwitchCase="'blue'">U picked blue</div>
      <div *ngSwitchCase="'pink'">U picked pink</div>
      <div *ngSwitchDefault>Pick again pls</div>
    </div>

    <ul *ngFor="let c of colors">
    <li>{{c}} 
  </ul>
  <h2>
    "Parent data: " {{name}}
  </h2>
  <button (click)="fireEvent()">Send event</button>
  <h2></h2>
  </div> `,
  styleUrl: './test.component.css',
})
export class TestComponent implements OnInit {
  //public name: String = '';
  //public siteUrl = window.location.href;
  public myId = 'testId';
  public hasError = true;
  public highligthColor = 'blue';
  public titleStyle = {
    color: 'green',
    fontStyle: 'italic',
  };
  public greeting = '';
  displayName = true;

  public color = "violet";
  public colors = ["black", "white", "brown", "orange"];

  @Input('parentData') public name;
  
  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return this.name + ' means Hi!';
  }

  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(input) {
    console.log(input);
    //console.log(input.value);
  }

  fireEvent() {
    this.childEvent.emit('Hey! dear');
  }
}
