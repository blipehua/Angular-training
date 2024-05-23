import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>You selected department with ID = {{ departmentId }}</p>
    <div class="options">
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
      <router-outlet></router-outlet>
    </div>
    <button
      (click)="goPrevious()"
      [style.background-color]="'black'"
      [style.color]="'white'"
    >
      Previous
    </button>
    <button
      (click)="goNext()"
      [style.background-color]="'black'"
      [style.color]="'white'"
    >
      Next
    </button>
    <div>
      <button (click)="goToDeparments()">Regresar</button>
    </div>
  `,
  styles: `
    .options {
      margin-bottom: 30px;
      margin-top: 10px;
    }
  `,
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //let id: number = parseInt(this.route.snapshot.paramMap.get('id') || '');
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '');
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDeparments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route,
    });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
