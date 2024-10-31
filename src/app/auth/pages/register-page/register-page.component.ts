import { Component } from '@angular/core';
import { AngMaterialModule } from '../../../ang-material/ang-material.module';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'auth-register-page',
	standalone: true,
	imports: [AngMaterialModule, RouterModule],
	templateUrl: './register-page.component.html',
	styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
	public passVisibility: boolean = false;

	changePassVisibility() {
		this.passVisibility = !this.passVisibility;
	}
}
