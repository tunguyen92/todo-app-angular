import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usernameInput: string = '';
  passwordInput: string = '';
  public signupForm!: FormGroup;
  public loginForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuider.group({
      username: [''],
      email: [''],
      password: [''],
    });

    this.loginForm = this.formBuider.group({
      username: [''],
      password: [''],
    });

    const userLocalstorage = JSON.parse(localStorage.getItem('user'));
    if (userLocalstorage) {
      this.usernameInput = userLocalstorage.username;
      this.passwordInput = userLocalstorage.password;
    }
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3000/users', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('Success');
          this.signupForm.reset();
          // redirect to sign in
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }

  signIn() {
    const userInput = this.loginForm.value;

    if (userInput.username === 'tunguyen' && userInput.password === '123123') {
      alert('Login Success');
      this.loginForm.reset();
      this.router.navigate(['home']);
      if (userInput.username !== '' && userInput !== '') {
        localStorage.setItem('user', JSON.stringify(userInput));
      }
    } else if (userInput.username === '' || userInput.password === '') {
      alert('Required');
    } else {
      alert('Something went wrong');
    }
    // this.http.get<any>('http://localhost:3000/users').subscribe(
    //   (res) => {
    //     const user = res.find((u: any) => {
    //       return (
    //         u.username === this.loginForm.value.username &&
    //         u.password === this.loginForm.value.password
    //       );
    //     });
    //     const userLocalstorage = JSON.parse(localStorage.getItem('user'));

    //     if (user || userLocalstorage) {
    //       alert('Login Success');
    //       this.loginForm.reset();
    //       this.router.navigate(['todos']);
    //       localStorage.setItem('user', JSON.stringify(user));
    //     } else {
    //       alert('Username or password are incorrect');
    //     }
    //   },
    //   (err) => {
    //     alert('Something went wrong');
    //     console.log(err);
    //   }
    // );
  }
}
