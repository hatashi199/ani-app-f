import { Component, inject } from '@angular/core';
import { AngMaterialModule } from '../../../ang-material/ang-material.module';
import { RouterModule } from '@angular/router';
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
	public passVisibility: boolean = false;
	public loginForm: FormGroup = this.fb.group({
		username: ['', Validators.required],
		password: ['', [Validators.required, Validators.minLength(8)]]
	});

	changePassVisibility() {
		this.passVisibility = !this.passVisibility;
	}

	login() {
		console.log(this.loginForm.valid);

		if (this.loginForm.invalid) return;

		this.authService
			.loginUser(
				this.loginForm.controls['username'].value,
				this.loginForm.controls['password'].value
			)
			.subscribe((data) => console.log(data));
	}
}
