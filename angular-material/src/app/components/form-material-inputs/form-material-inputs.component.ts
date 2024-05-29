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
  texto = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  errorMessage = '';

  constructor() {
    merge(this.texto.statusChanges, this.texto.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.texto.hasError('required')) {
      this.errorMessage = 'Debes ingresar un texto';
    } else if (this.texto.invalid) {
      this.errorMessage = 'Texto inválido, debes ingresar letras';
    } else {
      this.errorMessage = '';
    }
  }
}
