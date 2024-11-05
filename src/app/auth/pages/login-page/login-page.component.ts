import { Component, inject } from '@angular/core';
import { AngMaterialModule } from '../../../ang-material/ang-material.module';
import { Router, RouterModule } from '@angular/router';
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'auth-login-page',
	standalone: true,
	imports: [AngMaterialModule, RouterModule, ReactiveFormsModule],
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
	private fb = inject(FormBuilder);
	private authService = inject(AuthService);
	private router = inject(Router);
	public passVisibility: boolean = false;
	public loginForm: FormGroup = this.fb.group({
		usernameOrEmail: ['', Validators.required],
		password: ['', [Validators.required, Validators.minLength(8)]]
	});

	changePassVisibility() {
		this.passVisibility = !this.passVisibility;
	}

	login(): boolean {
		if (this.loginForm.invalid) return false;

		const emailRegexp: RegExp =
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const usernameOrEmailValue: string =
			this.loginForm.controls['usernameOrEmail'].value;
		const passwordValue: string = this.loginForm.controls['password'].value;

		const isEmail = emailRegexp.test(usernameOrEmailValue);

		this.authService
			.loginUser(
				passwordValue,
				isEmail ? '' : usernameOrEmailValue,
				isEmail ? usernameOrEmailValue : ''
			)
			.subscribe(() => this.router.navigate(['/anime']));

		return true;
	}
}
