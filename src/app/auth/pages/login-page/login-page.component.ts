import { Component } from '@angular/core';
import { AngMaterialModule } from '../../../ang-material/ang-material.module';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'auth-login-page',
	standalone: true,
	imports: [AngMaterialModule, RouterModule],
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
	public passVisibility: boolean = false;

	changePassVisibility() {
		this.passVisibility = !this.passVisibility;
	}
}
