import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { IEmployee } from '../../model/employee';
import { error } from 'console';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrl: './employe-detail.component.css'
})
export class EmployeDetailComponent implements OnInit{
  public employees : IEmployee[]  = [];
  public errorMessage;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService
      .getEmployees()
      .subscribe({
        next: (data) => (this.employees = data),
        error: (error) => {this.errorMessage = error.message},
        complete() {
            console.log('Fetching employees has finished');
        },
      });
  }
}
