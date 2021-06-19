import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userValidation = {
      username: {
        validator: [Validators.required]
      },
      password: {
        validator: [Validators.required]
      },
    }

  getUserDataFromJson() {
    return this.http.get('assets/json/user.json')
  }
  getUserDataFromApi() {
    return this.http.get('https://randomuser.me/api/0.8/?results=20')
  }
}
