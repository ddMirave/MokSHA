import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/interfaces/userForLogin';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent {
  constructor(private userService: UserService, private router: Router){}

  userName: string = '';
  password: string = '';

  user?: UserForLogin;

  createPostLogin(user: UserForLogin): void  {
    this.userService.loginUser(user).subscribe(
      (response) => {
        console.log(UserService.token = response.token);
         this.router.navigate(['../Home']); // перенаправление на другую страницу routerLink="../Home"
        console.log('Всё норм, проходите')
      },
      (error : HttpErrorResponse) => {
        console.error(error);
        console.log('Пароль неверный')
        // можно добавить сообщение об ошибке на текущей странице
      }
    );
  }

  postLogin(){
    this.createPostLogin(
      this.user = {
        'userName' : this.userName,
        'password' : this.password,
      }
    )
  }

  onEnter() {
    this.postLogin();
  }
}