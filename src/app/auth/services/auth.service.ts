import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private http = inject(HttpClient);
	public readonly baseAPIUrl: string = environment.BACK_SERVER;

	loginUser(
		password: string,
		username: string = '',
		email: string = ''
	): Observable<ApiResponse<string>> {
		const body = username ? { username, password } : { email, password };
		return this.http.post<ApiResponse<string>>(
			`${this.baseAPIUrl}/users/login`,
			body
		);
	}
}
