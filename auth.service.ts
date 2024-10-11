import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { LoginData } from './login-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(loginData: LoginData): Observable<boolean> {
    if (loginData.username === '1992428' && loginData.password === 'Moreno21') {
      sessionStorage.setItem('isLoggedIn', 'true');
      return of(true);
    } else {
      return throwError(() => new Error('Credenciales inválidas'));
    }
  }

  logout(): void {
    sessionStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }
}
