import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { PortalComponent } from '../component/portal/portal.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'main', component: PortalComponent }
];
