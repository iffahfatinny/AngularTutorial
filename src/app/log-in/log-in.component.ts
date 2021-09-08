import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { Detail } from '../detail';
// import { DetailService } from '../detail.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

    // details : Detail[]=[];
    details = {
    name: 'iffah',
    password: '123456'
    };

    hide = true;

    constructor(public dialog: MatDialog
      ) {}

    signIn(formValue : NgForm) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      // window.open('home/dashboard','_blank');
      console.log(formValue.value);
    });
  }
    ngOnInit(): void {
    }

    // @Input() detail?: Detail;


}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {

  constructor(private router: Router){}

}
