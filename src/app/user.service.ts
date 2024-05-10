import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserForRegister } from "./interfaces/userForRegister";
import { UserForLogin } from "./interfaces/userForLogin";
import { Token } from "./interfaces/token";

@Injectable({providedIn: 'root'})
export class UserService{

    constructor(private http: HttpClient){}

    static token: string;
    readonly ROOT_URL = 'http://79.174.94.77:8080/api/';
    
    registerUser(user: UserForRegister) : Observable<UserForRegister>{
        return this.http.post<UserForRegister>(this.ROOT_URL + "authentication/registration", user); 
      };
    loginUser(user: UserForLogin) : Observable<Token>{
        return this.http.post<Token>(this.ROOT_URL + "authentication/login", user);
    }
}