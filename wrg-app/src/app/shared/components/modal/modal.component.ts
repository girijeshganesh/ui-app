import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  userForm: any;
  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
    { value: 'other', viewValue: 'Other' }
  ];
  titles = [
    { value: 'mr', viewValue: 'MR' },
    { value: 'mrs', viewValue: 'MRS' }
  ]
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public dialog: MatDialog) {
    this.userForm = this.fb.group({
      gender: [''],
      title: [''],
      first: [''],
      last: [''],
      email: [''],
      username: [''],
      password: [''],
      dob: [null],
      phone: [null]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
  addUser() {
    return {
      gender: this.userForm.value.gender,
      name:{
        title: this.userForm.value.title,
        first: this.userForm.value.first,
        last: this.userForm.value.last,
      },
      email: this.userForm.value.email,
      username: this.userForm.value.username,
      password: this.userForm.value.password,
      dob: this.userForm.value.dob,
      phone: this.userForm.value.phone,
      picture: {
        large: 'assets/img/img-profile.jpg'
      }
    }
  }
}
