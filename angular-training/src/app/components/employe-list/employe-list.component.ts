import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { IEmployee } from '../../model/employee';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrl: './employe-list.component.css',
})
export class EmployeListComponent implements OnInit {
  public employees : IEmployee[] = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
  }
}
