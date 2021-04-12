import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import { MatDialogModule } from '@angular/material/dialog';
 import{ MatGridListModule} from '@angular/material/grid-list';
 import{ MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     MatDialogModule,
     MatGridListModule,
      MatButtonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     MatDialogModule,
     MatGridListModule,
      MatButtonModule 
  ],
})
export class SharedModule { }
