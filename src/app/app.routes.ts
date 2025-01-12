import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LegalComponent } from './legal/legal.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'legal', component:LegalComponent }, 
    { path: 'privacy', component:PrivacyComponent }, 
 ];
