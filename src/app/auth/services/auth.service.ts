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
		username: string,
		password: string
	): Observable<ApiResponse<string>> {
		return this.http.post<ApiResponse<string>>(
			`${this.baseAPIUrl}/users/login`,
			{ username, password }
		);
	}
}
