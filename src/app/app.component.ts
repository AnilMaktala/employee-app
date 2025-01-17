import { Component,OnInit } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Auth } from 'aws-amplify';
import awsExports from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-app';
  isAuthenticated: boolean = false;

  ngOnInit() {
    this.checkAuth();
  }
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }

  async checkAuth() {
    try {
      await Auth.currentAuthenticatedUser();
      this.isAuthenticated = true;
    } catch (e) {
      this.isAuthenticated = false;
    }
  }

  async login() {
    try {
      await Auth.federatedSignIn();
      this.isAuthenticated = true;
    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    try {
      await Auth.signOut();
      this.isAuthenticated = false;
    } catch (e) {
      console.error(e);
    }
  }
}
