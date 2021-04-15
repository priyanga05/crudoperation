import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import { MatDialogModule } from '@angular/material/dialog';
 import{ MatFormFieldControl } from '@angular/material/form-field';
 import{ MatButtonModule } from '@angular/material/button';
 import {MatIconModule} from '@angular/material/icon';
 import{ MAT_DIALOG_DATA} from '@angular/material/dialog';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { MatInputModule } from '@angular/material/input';
 import{ MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     MatDialogModule,    
      MatButtonModule,
      MatIconModule,
      MatSnackBarModule,
      MatInputModule,
      MatTableModule,
      MatSelectModule 
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatSnackBarModule,
      MatInputModule,
      MatTableModule,
      MatSelectModule 
     
  ],
})
export class SharedModule { }
