import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginSection!: FormGroup;
  userEmail = '';
  userPassword = '';

  constructor(private fb: FormBuilder) { };

  ngOnInit() {
    this.loginSection = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.loginSection.valueChanges.subscribe(values => {
      this.userEmail = values.email;
      this.userPassword = values.password;
    });
  }

}
