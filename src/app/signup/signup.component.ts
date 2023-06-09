import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username!: string;
  phonenumber!: BigInteger;
  email!: string;
  password!: string;

  signup() {

    console.log('Signup button clicked');
    console.log('Username:', this.username);
    console.log('Phonenumber:',this.phonenumber);
    console.log('email:', this.email);
    console.log('Password:', this.password);
  }

}
