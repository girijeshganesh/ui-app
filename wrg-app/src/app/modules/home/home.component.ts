import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData: any;
  searchText: any;
  allUsers: any;
  showUserInfoDetails: any;
  constructor(private userService: UserService, private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
  }
  ngOnInit(): void {
    if (!localStorage.getItem('userData')) {
      this.router.navigate([''])
    }
    this.userData = JSON.parse(localStorage.getItem('userData') || '');
    this.allUsers = JSON.parse(localStorage.getItem('userData') || '');
    this.showUserInfoDetails = null;
  }
  addUser() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const user = { user: result };
        this.userData = [user, ...this.userData];
        this.allUsers = this.userData;
        localStorage.setItem('userData', JSON.stringify(this.userData));
      }
    });
  }
  search(value: any) {
    if (value) {
      this.userData = this.allUsers.filter((user: any) => user?.user?.name?.first.toLowerCase().includes(value.toLowerCase()) || user?.user?.name?.last.toLowerCase().includes(value.toLowerCase()))
    }
    else {
      this.userData = this.allUsers;
    }
  }
  getUserDetails(user: any) {
    this.showUserInfoDetails = user?.user;
  }
  goBack() {
    this.showUserInfoDetails = null;
  }
}
