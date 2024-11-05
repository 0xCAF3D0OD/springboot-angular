import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule as NgFormsModule } from '@angular/forms';
import { MaterialAngularSelectModule } from 'material-angular-select';

import { ThemeModule } from '../../theme/theme.module';

import { EmployerFormComponent } from './employer-form';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgFormsModule,
    MaterialAngularSelectModule,
  ],
  declarations: [
    FormsComponent,
    EmployerFormComponent,
  ],
  providers: [],
  exports: [
    EmployerFormComponent
  ]
})
export class FormsModule { }
