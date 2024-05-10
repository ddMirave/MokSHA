export class UserForRegister {
    userName: string;
    password: string;
    passwordTrue: string;
    email: string;
    roles: string[];

    constructor(userName: string, password: string, passwordTrue: string, email: string, roles: string[]) {
        this.userName = userName;
        this.password = password;
        this.passwordTrue = passwordTrue;
        this.email = email;
        this.roles = roles;
    }
}