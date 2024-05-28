import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-form-material-inputs',
  templateUrl: './form-material-inputs.component.html',
  styleUrl: './form-material-inputs.component.css'
})
export class FormMaterialInputsComponent {
  // textoIzquierdo = new FormControl('', [Validators.required, Validators.email]);
  // errorMessage = '';

  // constructor() {
  //   merge(this.textoIzquierdo.statusChanges, this.textoIzquierdo.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());
  // }

  // updateErrorMessage() {
  //   if (this.textoIzquierdo.hasError('required')) {
  //     this.errorMessage = 'Debes de ingresar un valor';
  //   } else if (this.textoIzquierdo.hasError('textoIzquierdo')) {
  //     this.errorMessage = 'Texto de error';
  //   } else {
  //     this.errorMessage = '';
  //   }
  // }
}
