import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
	MAT_FORM_FIELD_DEFAULT_OPTIONS,
	MatFormFieldModule
} from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
	declarations: [],
	exports: [
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatDatepickerModule
	],
	providers: [
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: { appearance: 'outline' }
		},
		provideNativeDateAdapter()
	]
})
export class AngMaterialModule {}
