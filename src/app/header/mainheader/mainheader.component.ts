import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SigninComponent } from '../signin/signin.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {
  bsModalRef: BsModalRef;
  public avatar: any;
  constructor(
    public matDialog: MatDialog,
    private modalService: BsModalService,
    private loginservice: LoginService
  ) { }

  ngOnInit(): void {
    this.subcribeLogin();
  }
  openModalSignUp() {
    this.bsModalRef = this.modalService.show(SignupComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openModalSignIn() {

    this.bsModalRef = this.modalService.show(SigninComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  subcribeLogin() {
    this.loginservice.loginUser.subscribe((res) => {
      if (res) {
        this.avatar = res.username;
      } else {
        this.avatar = res;
      }
    })
  }
  logout() {
    this.loginservice.doLogout();
  }
}


