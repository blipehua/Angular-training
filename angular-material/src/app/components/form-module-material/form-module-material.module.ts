import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

const FormMaterialComponents = [
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatLabel, 
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [FormMaterialComponents],
  exports: [FormMaterialComponents],
})
export class FormModuleMaterialModule {}
