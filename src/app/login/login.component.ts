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
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3000/signupUsers', this.signupForm.value)
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
    this.http
      .get<any>('http://localhost:3000/signupUsers', this.signupForm.value)
      .subscribe(
        (res) => {
          const user = res.find((u: any) => {
            return (
              u.username === this.loginForm.value.username &&
              u.password === this.loginForm.value.password
            );
          });
          if (user) {
            alert('Login Success');
            this.loginForm.reset();
            this.router.navigate(['todos']);
          } else {
            alert('User not found');
          }
        },
        (err) => {
          alert('Something went wrong');
          console.log(err);
        }
      );
  }
}
