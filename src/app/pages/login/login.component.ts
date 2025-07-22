import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginSection!: FormGroup;
  userEmail = '';
  userPassword = '';
  subscription = new Subscription();

  constructor(private fb: FormBuilder) { };

  ngOnInit() {
    this.loginSection = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.subscription = this.loginSection.valueChanges.subscribe(values => {
      this.userEmail = values.email;
      this.userPassword = values.password;
    });
  }

  ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
