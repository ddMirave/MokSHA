import { Component } from '@angular/core';
import { UserForRegister } from 'src/app/interfaces/userForRegister';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})

export class RegistrationPageComponent {
  constructor(private userService: UserService, private router: Router){}

  userName: string = '';
  email: string = '';
  password: string = '';
  passwordTrue: string = '';
  roles: string[] = ['student'];
  errorMessage: string = '';

  user: UserForRegister = {
    userName: '',
    email: '',
    password: '',
    roles: []
  };

  // Функция для проверки имени пользователя на соответствие требованиям
  isUserNameValid(username: string): boolean {
    // Регулярное выражение, проверяющее, что имя пользователя содержит только латинские буквы и/или цифры
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(username);
  }

  // Функция для проверки пароля на наличие цифр
  isPasswordValid(password: string): boolean {
    // Регулярное выражение, проверяющее, что пароль содержит хотя бы одну цифру
    const pattern = /\d+/;
    return pattern.test(password);
  }

  createPostRegister(user: UserForRegister): void {
    // Проверка на соответствие имени пользователя требованиям
    if (!this.isUserNameValid(user.userName)) {
      this.errorMessage = 'Имя пользователя должно содержать только латинские буквы и/или цифры.';
      return;
    }

    // Проверка наличия цифр в пароле
    if (!this.isPasswordValid(user.password)) {
      this.errorMessage = 'Пароль должен содержать хотя бы одну цифру.';
      return;
    }

    this.userService.registerUser(user).subscribe(
    (response) => {
      console.log(response);
      this.router.navigate(['../SignIn']); 
      // действия при успешной регистрации

      console.log('Done');
    },
    (error) => {
      console.error(error);
      
      if(error.error) {
        // this.errorMessage = 'Произошла ошибка при регистрации. Проверьте правильность ввода данных.';

        if (error.error.PasswordTooShort) {
          this.errorMessage = 'Пароль слишком короткий. Пожалуйста, используйте более длинный пароль.';
          console.log('PSWDDDDDDDDDDDDDDD');
        }
        else if(error.error.InvalidEmail) {
          this.errorMessage = 'Неправильный формат почты. Пожалуйста, введите корректный email.';
          console.log('EMAILLLLLLLLLLLLLL');
        } 
        else if(error.status === 400) {
          this.errorMessage = 'Произошла ошибка при регистрации. Проверьте правильность ввода данных.';
          console.log('400 0000000000000');
        } 
        else {
          this.errorMessage = 'Произошла ошибка при регистрации. Попробуйте еще раз.';
        }
      }
    });
  }

  postRegister() {
    // Проверяем, чтобы пароль и подтверждение пароля были одинаковыми
    if (this.password !== this.passwordTrue) { 
      // Если пароли не совпадают, выводим сообщение об ошибке и не продолжаем регистрацию
      this.errorMessage = 'Пароли не совпадают.';
      console.log('PASSWORD FALSEEEEE');
      return;
    }

    // Создаем объект пользователя для регистрации
    this.user = new UserForRegister(this.userName, this.password, this.email, this.roles);

    // Вызываем метод для отправки данных на регистрацию
    this.createPostRegister(this.user);
  }

  onEnter() {
    this.postRegister();
  }
}