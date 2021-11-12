import { Injectable } from '@angular/core';
import { Auth, User, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _auth: Auth
  ) { 
    this._auth.onAuthStateChanged((user: User | null) => {
      if (user !== null) {
        sessionStorage.setItem("userdata", JSON.stringify(user));
      } else {
        sessionStorage.setItem("userdata", "");
      }
    });
  }

  public signInWithGoogle(): Promise<any> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this._auth, provider);
  }

  public signOut(): Promise<any> {
    return signOut(this._auth);
  }

  public get user(): any {
    const userData = sessionStorage.getItem("userdata") || "";
    return JSON.parse(userData);
  }

  public get isAuthenticated(): any {
    const sessionStorageUserData = sessionStorage.getItem("userdata");
    return sessionStorageUserData !== "" && sessionStorageUserData !== null;
  }
}
