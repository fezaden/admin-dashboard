import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string; 
}

@Injectable({
  providedIn: 'root' // 💡 Otomatik olarak global tanımlı olur, AppModule gerekmez
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // JSON Server adresi

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  addUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  checkLogin(email: string, password: string): Observable<User[]> {
  return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`);
}

}
