import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const NavbarMaterialComponents = [
  MatToolbarModule, MatButtonModule, MatIconModule
]


@NgModule({
  declarations: [],
  imports: [
    NavbarMaterialComponents
  ],
  exports: [ NavbarMaterialComponents ]
})
export class NavbarMaterialModule { }
