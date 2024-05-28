import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormMaterialComponent } from './components/form-material/form-material.component';
import { FormModuleMaterialModule } from './components/form-module-material/form-module-material.module';
import { FormMaterialInputsComponent } from './components/form-material-inputs/form-material-inputs.component';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { NavbarMaterialModule } from './components/nav/navbar-material/navbar-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormMaterialComponent,
    FormMaterialInputsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModuleMaterialModule, 
    NavbarMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
