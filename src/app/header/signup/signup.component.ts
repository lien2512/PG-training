import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Login } from 'src/app/models/login';
import { SigninComponent } from '../signin/signin.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formControl: FormGroup;
  model: Login = new Login();
  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private loginservice : LoginService
  ) {
    this.formControl = new FormBuilder().group({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      pass: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    });
  }
  ngOnInit(): void {
  }
  get getInputemail() {
    return this.formControl.controls.email;
  }
  get getInputUsernamel() {
    return this.formControl.controls.username;
  }
  get getInputPass() {
    return this.formControl.controls.pass;
  }
  openModalSignIn() {
    if (this.formControl.valid) {
      this.bsModalRef.hide();
      const obj = {
        password: this.model.password,
        username: this.model.username
      }
      this.loginservice.doSignUp(obj);
      // alert("Đăng ký thành công");
      this.bsModalRef = this.modalService.show(SigninComponent);
      this.bsModalRef.content.closeBtnName = 'Close';
    } else {
      this.formControl.markAllAsTouched();
      alert("Vui lòng nhập đủ các trường")
    }
    
  }
 

}
