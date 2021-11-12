import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _auth: AuthService
  ) {}

  public signIn() {
    this._auth.signInWithGoogle().then(() => {
      
    }).catch((err: any) => {
      console.log(err);
    });
  }

  public logout() {
    return this._auth.signOut().then(() => {

    }).catch((err: any) => {

    });
  }

  public get user(): any {
    return this._auth.user;
  }

  public get isAuthenticated(): boolean {
    return this._auth.isAuthenticated;
  }

}
