import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Login } from 'src/app/models/login';
import {
  NgForm,
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  formControl: FormGroup;
  model: Login = new Login();
  userLogin: any = null;
  constructor(
    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private loginservice: LoginService,
    private router: Router
  ) {
    this.formControl = new FormBuilder().group({
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
  ngOnInit(): void {}
  get getInputUsernamel() {
    return this.formControl.controls.username;
  }
  get getInputPass() {
    return this.formControl.controls.pass;
  }
  navigateSignUp() {
    // this.router.navigate(['signup']);
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(SignupComponent);
  }
  doLogin() {
    if (this.formControl.valid) {
      const obj = {
        password: this.model.password,
        username: this.model.username,
      };
      if (this.loginservice.doLogin(obj)) {
        this.bsModalRef.hide();
        this.userLogin = obj;
        this.router.navigate(['new']);
      }
    } else {
      alert('Vui lòng nhập đủ các trường');
    }
  }
}
