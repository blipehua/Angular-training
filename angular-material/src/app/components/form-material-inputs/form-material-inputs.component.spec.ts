import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaterialInputsComponent } from './form-material-inputs.component';

describe('FormMaterialInputsComponent', () => {
  let component: FormMaterialInputsComponent;
  let fixture: ComponentFixture<FormMaterialInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormMaterialInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMaterialInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
