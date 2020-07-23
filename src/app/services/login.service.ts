import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../models/login';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SigninComponent } from '../header/signin/signin.component';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginUser$ = new BehaviorSubject<Login>(null);
  public loginUser = this.loginUser$.asObservable();
  isLogin = false;
  constructor(
    private modalService: BsModalService,
    private cookieService: CookieService
  ) {}
  // hàm đăng ký
  doSignUp(user: any) {
    localStorage.setItem('password', user.password);
    localStorage.setItem('username', user.username);

    if (localStorage.getItem('user')) {
      var username = JSON.parse(localStorage.getItem('user'));
      let b = username.findIndex(function(item) {
        return item === user.username + '-' + user.password;
      });
      if (b > -1) {
        alert("Tài khoản đã được đăng ký");
      }
      username.push(user.username + '-' + user.password);
      localStorage.setItem('user', JSON.stringify(username));
    } else {
      var usern = [];
      usern.push(user.username + '-' + user.password);
      localStorage.setItem('user', JSON.stringify(usern));
    }
  }
  checkLogin(user) {
    var usernam = JSON.parse(localStorage.getItem('user'));
    return ( usernam.findIndex(function(item) {
      return item === user.username + '-' + user.password;
    }) > -1
    );
  }
  // hàm đăng nhập
  doLogin(user) {
    if (localStorage.getItem('username')) {
      if (this.checkLogin(user)) {
        this.cookieService.set('user', user.username);
        this.loginUser$.next(user);
        alert('Đăng nhập thành công');
        this.isLogin = true;
        return true;
      } else {
        alert('Sai email hoặc mặt khẩu');
        return false;
      }
    } else {
      alert('Bạn chưa đăng ký');
      return false;
    }
  }
  logined() {
    if (localStorage.getItem('username')) {
      if (this.cookieService.get('user')) {
        return true;
      }
    }
  }
  // lấy thông tin đăng nhập khi load lại trang
  restoreUser() {
    if (this.cookieService.get('user')) {
      const obj = {
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password'),
      };
      this.loginUser$.next(obj);
    }
    console.log(this.loginUser);
  }
  // hàm đăng xuất
  doLogout() {
    if (localStorage.getItem('username')) {
      if (this.cookieService.get('user')) {
        // localStorage.clear();
        this.cookieService.delete('user');
        alert('Đăng xuất thành công');
        this.isLogin = false;
        this.loginUser$.next(null);
      } else {
        alert('Bạn chưa đăng nhập');
      }
    } else {
      alert('Bạn chưa đăng ký');
    }
  }
}
