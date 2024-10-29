import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { TemporalComponent } from './pages/temporal/temporal.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardLayoutComponent,
		children: [
			{ path: 'temporal', component: TemporalComponent },
			{ path: '**', redirectTo: 'temporal' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
