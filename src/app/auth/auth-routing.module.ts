import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RecoverPassPageComponent } from './pages/recover-pass-page/recover-pass-page.component';
import { ResetPassPageComponent } from './pages/reset-pass-page/reset-pass-page.component';

const routes: Routes = [
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{ path: 'register', component: RegisterPageComponent },
			{ path: 'login', component: LoginPageComponent },
			{ path: 'recover-pass', component: RecoverPassPageComponent },
			{ path: 'reset-pass', component: ResetPassPageComponent },
			{ path: '**', redirectTo: 'login' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
