import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
const materials =
  [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule

  ];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
