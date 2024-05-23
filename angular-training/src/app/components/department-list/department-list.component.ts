import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IDepartment } from '../../model/department';
import { DepartmentService } from '../../service/department/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent implements OnInit {
  public departmentList: IDepartment[] = [];
  public selectedId;
  constructor(private _departmentService: DepartmentService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._departmentService.getDepartments().subscribe({
      next: (data) => (this.departmentList = data),
      error: (error) => {
        throw new Error(error);
      },
      complete() {
        console.log('Fetching departments has finished');
      },
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '');
      this.selectedId = id;
    });
  }

  onSelect(department: IDepartment) {
    //this.router.navigate(['/departments',  department.id])
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department: IDepartment) {
    return department.id === this.selectedId;
  }
}
