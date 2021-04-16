import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import{ MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-deletecomponent',
  templateUrl: './deletecomponent.component.html',
  styleUrls: ['./deletecomponent.component.scss']
})
export class DeletecomponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogref:MatDialogRef<DeletecomponentComponent>) { }

  ngOnInit(): void {
  }

 
}
