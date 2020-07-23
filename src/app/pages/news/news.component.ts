import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  userLogin: boolean;
  constructor(
    private router: Router,
    private loginservice: LoginService
  ) { }

  ngOnInit(): void {
    // this.userLogin = this.loginservice.logined();
    // console.log(this.userLogin);
  }
  navigate() {
    this.router.navigate(['']);
  }


}
