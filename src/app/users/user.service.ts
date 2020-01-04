import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.apiUrl}/user/`;
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  delete(id: number): Observable<any> {
   return this.http.delete(`${this.userUrl}/${id}`);
  }

  newUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.userUrl}/${user.id}`, user);
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }
}
