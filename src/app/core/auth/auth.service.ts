import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {
    this.verify();
  }

  public login(credentials: { username: string, password: string }): Observable<void> {
    return this.http.post<void>(`https://auth.groupclaes.be/login`, credentials).pipe(shareReplay());
  }

  public verify() {
    const req = this.http.get<any>(`https://auth.groupclaes.be/login`).pipe(shareReplay());
    req.subscribe(() => this.authenticated = true, err => this.authenticated = false);
    return req;
  }

  public logout() {
    return this.http.get<any>(`https://auth.groupclaes.be/logout`).pipe(shareReplay());
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }
}
