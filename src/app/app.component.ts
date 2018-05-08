import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscriptionForm: NgForm;
  defaultSubscription = 'advanced';
  subscription = {
    email: '',
    subscription: '',
    pwd: ''
  };
  submitted = false;

  onSubmit() {
    console.log(this.subscriptionForm);
    this.submitted = true;
    this.subscription.email = this.subscriptionForm.value.email;
    this.subscription.subscription = this.subscriptionForm.value.subscription;
    this.subscription.pwd = this.subscriptionForm.value.password;
    console.log(this.subscription);
    // reset the default value
    this.subscriptionForm.reset({ subscription: this.defaultSubscription});
  }

}
